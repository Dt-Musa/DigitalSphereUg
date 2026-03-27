import { useEffect, useMemo, useRef, useState } from "react";

const DARK_TOKENS = {
  bg: "#05070f",
  surface: "#0d1120",
  card: "#101525",
  cardHov: "#141a2e",
  border: "#1c2540",
  blue: "#2847D4",
  blueLt: "#4d6ff0",
  green: "#34d399",
  cyan: "#38bdf8",
  purple: "#818cf8",
  text: "#eef2ff",
  textSub: "#94a3b8",
  textDim: "#475569",
};

const LIGHT_TOKENS = {
  bg: "#f6f8fc",
  surface: "#ffffff",
  card: "#ffffff",
  cardHov: "#f2f5fd",
  border: "#d6ddf0",
  blue: "#2847D4",
  blueLt: "#4d6ff0",
  green: "#10b981",
  cyan: "#0ea5e9",
  purple: "#6d78e8",
  text: "#0b1220",
  textSub: "#334155",
  textDim: "#55657d",
};

const difficultyColor = {
  Beginner: "#34d399",
  Intermediate: "#38bdf8",
  Advanced: "#818cf8",
};

function safeRead(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      return fallback;
    }
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function safeWrite(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage failures in restricted browsing modes.
  }
}

function getLessonStoragePrefix(trackName, lessonNumber) {
  return `digitalsphereug.lesson.${trackName.toLowerCase().replace(/\s+/g, "-")}.${lessonNumber}`;
}

function withLength(value, length, fallbackValue) {
  const fallback = new Array(length).fill(fallbackValue);
  if (!Array.isArray(value)) {
    return fallback;
  }
  return fallback.map((item, index) => (index < value.length ? value[index] : item));
}

function getQuizFingerprint(questions) {
  return JSON.stringify(
    questions.map((question) => ({
      question: question.question,
      options: question.options,
      correctIndex: question.correctIndex,
    })),
  );
}

function readLessonProgress(lessonPrefix, questions, quizFingerprint) {
  const emptySelections = new Array(questions.length).fill(null);
  const emptyCorrect = new Array(questions.length).fill(false);
  const emptyFeedback = new Array(questions.length).fill("");

  const savedFingerprint = safeRead(`${lessonPrefix}.quizFingerprint`, null);
  if (savedFingerprint !== quizFingerprint) {
    return {
      quizSelections: emptySelections,
      quizCorrect: emptyCorrect,
      quizFeedback: emptyFeedback,
      taskAnswer: "",
      taskCompleted: false,
      lessonCompleted: false,
    };
  }

  const rawSelections = withLength(
    safeRead(`${lessonPrefix}.quizSelections`, null),
    questions.length,
    null,
  );

  const quizSelections = rawSelections.map((selectedOptionIndex, questionIndex) => {
    const optionCount = Array.isArray(questions[questionIndex]?.options)
      ? questions[questionIndex].options.length
      : 0;

    if (
      typeof selectedOptionIndex === "number"
      && selectedOptionIndex >= 0
      && selectedOptionIndex < optionCount
    ) {
      return selectedOptionIndex;
    }

    return null;
  });

  const rawCorrect = withLength(
    safeRead(`${lessonPrefix}.quizCorrect`, false),
    questions.length,
    false,
  );
  const quizCorrect = rawCorrect.map((value) => Boolean(value));

  const rawFeedback = withLength(
    safeRead(`${lessonPrefix}.quizFeedback`, ""),
    questions.length,
    "",
  );
  const quizFeedback = rawFeedback.map((value) => (typeof value === "string" ? value : ""));

  return {
    quizSelections,
    quizCorrect,
    quizFeedback,
    taskAnswer: safeRead(`${lessonPrefix}.taskAnswer`, ""),
    taskCompleted: safeRead(`${lessonPrefix}.taskCompleted`, false),
    lessonCompleted: safeRead(`${lessonPrefix}.lessonCompleted`, false),
  };
}

export default function LessonPage({
  trackName,
  lessonNumber,
  totalLessons,
  lessonTitle,
  estimatedTime,
  difficulty,
  whatYoullLearn,
  contextText,
  focusPoints,
  resource,
  questions,
  practicalTask,
  xpReward,
  allLessons,
  theme = "dark",
  onNextLesson,
  onPreviousLesson,
  onJumpToLesson,
  onBackToTrack,
}) {
  const TOKENS = theme === "light" ? LIGHT_TOKENS : DARK_TOKENS;

  const lessonPrefix = useMemo(
    () => getLessonStoragePrefix(trackName, lessonNumber),
    [trackName, lessonNumber],
  );
  const quizFingerprint = useMemo(() => getQuizFingerprint(questions), [questions]);
  const initialProgress = useMemo(
    () => readLessonProgress(lessonPrefix, questions, quizFingerprint),
    [lessonPrefix, questions, quizFingerprint],
  );

  const resourceSectionRef = useRef(null);
  const quizSectionRef = useRef(null);
  const practicalSectionRef = useRef(null);
  const completionSectionRef = useRef(null);
  const unlockFlashTimeoutRef = useRef(null);

  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= 768 : false,
  );
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);
  const [videoEmbedFailed, setVideoEmbedFailed] = useState(false);
  const [recentlyUnlockedLesson, setRecentlyUnlockedLesson] = useState(null);

  const [quizSelections, setQuizSelections] = useState(initialProgress.quizSelections);
  const [quizCorrect, setQuizCorrect] = useState(initialProgress.quizCorrect);
  const [quizFeedback, setQuizFeedback] = useState(initialProgress.quizFeedback);

  const [taskAnswer, setTaskAnswer] = useState(initialProgress.taskAnswer);
  const [taskCompleted, setTaskCompleted] = useState(initialProgress.taskCompleted);
  const [lessonCompleted, setLessonCompleted] = useState(initialProgress.lessonCompleted);

  useEffect(() => {
    const progress = readLessonProgress(lessonPrefix, questions, quizFingerprint);
    setQuizSelections(progress.quizSelections);
    setQuizCorrect(progress.quizCorrect);
    setQuizFeedback(progress.quizFeedback);
    setTaskAnswer(progress.taskAnswer);
    setTaskCompleted(progress.taskCompleted);
    setLessonCompleted(progress.lessonCompleted);
    setLoadVideo(false);
    setVideoEmbedFailed(false);
  }, [lessonPrefix, questions, quizFingerprint]);

  useEffect(() => {
    safeWrite(`${lessonPrefix}.quizFingerprint`, quizFingerprint);
  }, [lessonPrefix, quizFingerprint]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const onResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    safeWrite(`${lessonPrefix}.quizSelections`, quizSelections);
  }, [lessonPrefix, quizSelections]);

  useEffect(() => {
    safeWrite(`${lessonPrefix}.quizCorrect`, quizCorrect);
  }, [lessonPrefix, quizCorrect]);

  useEffect(() => {
    safeWrite(`${lessonPrefix}.quizFeedback`, quizFeedback);
  }, [lessonPrefix, quizFeedback]);

  useEffect(() => {
    safeWrite(`${lessonPrefix}.taskAnswer`, taskAnswer);
  }, [lessonPrefix, taskAnswer]);

  useEffect(() => {
    safeWrite(`${lessonPrefix}.taskCompleted`, taskCompleted);
  }, [lessonPrefix, taskCompleted]);

  useEffect(() => {
    safeWrite(`${lessonPrefix}.lessonCompleted`, lessonCompleted);
  }, [lessonPrefix, lessonCompleted]);

  useEffect(() => {
    const allCorrect = quizCorrect.every(Boolean);
    if (allCorrect && taskCompleted && !lessonCompleted) {
      setLessonCompleted(true);
    }
  }, [quizCorrect, taskCompleted, lessonCompleted]);

  useEffect(() => {
    if (resource.type !== "video" || !resourceSectionRef.current || loadVideo) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.2 },
    );

    observer.observe(resourceSectionRef.current);

    return () => observer.disconnect();
  }, [resource.type, loadVideo]);

  const allQuizCorrect = quizCorrect.every(Boolean);
  const readyForCompletion = allQuizCorrect && taskCompleted;
  const isFinalLesson = lessonNumber === totalLessons;
  const canGoPrevious = lessonNumber > 1 && typeof onPreviousLesson === "function";

  useEffect(() => {
    if (allQuizCorrect && taskCompleted && completionSectionRef.current) {
      completionSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [allQuizCorrect, taskCompleted]);

  const trackCompletedCount = allLessons.reduce((count, item, index) => {
    if (index === lessonNumber - 1) {
      return count + (readyForCompletion || item.completed ? 1 : 0);
    }
    return count + (item.completed ? 1 : 0);
  }, 0);

  const trackProgressPercent = Math.round((trackCompletedCount / totalLessons) * 100);
  const completionProgress = trackProgressPercent;
  const maxUnlockedLesson = Math.min(totalLessons, trackCompletedCount + 1);
  const hasLockedLessons = maxUnlockedLesson < totalLessons;
  const nextLockedLessonNumber = Math.min(totalLessons, maxUnlockedLesson + 1);

  useEffect(() => {
    return () => {
      if (unlockFlashTimeoutRef.current) {
        clearTimeout(unlockFlashTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (lessonNumber >= maxUnlockedLesson || maxUnlockedLesson > totalLessons) {
      return;
    }

    setRecentlyUnlockedLesson(maxUnlockedLesson);
    if (unlockFlashTimeoutRef.current) {
      clearTimeout(unlockFlashTimeoutRef.current);
    }
    unlockFlashTimeoutRef.current = setTimeout(() => {
      setRecentlyUnlockedLesson(null);
      unlockFlashTimeoutRef.current = null;
    }, 2000);
  }, [lessonNumber, maxUnlockedLesson, totalLessons]);

  const mergedLessons = allLessons.map((item, index) => {
    if (index === lessonNumber - 1) {
      return {
        ...item,
        completed: readyForCompletion || item.completed,
      };
    }
    return item;
  });

  const handleQuizAnswer = (qIndex, optionIndex) => {
    const isCorrect = optionIndex === questions[qIndex].correctIndex;

    const updatedSelections = [...quizSelections];
    updatedSelections[qIndex] = optionIndex;
    setQuizSelections(updatedSelections);

    const updatedCorrect = [...quizCorrect];
    updatedCorrect[qIndex] = isCorrect;
    setQuizCorrect(updatedCorrect);

    const updatedFeedback = [...quizFeedback];
    updatedFeedback[qIndex] = isCorrect
      ? questions[qIndex].successMessage
      : questions[qIndex].hint;
    setQuizFeedback(updatedFeedback);
  };

  const onContinueLearning = () => {
    if (quizSectionRef.current) {
      quizSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const onJumpToPractical = () => {
    if (!allQuizCorrect) {
      return;
    }
    if (practicalSectionRef.current) {
      practicalSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const submitTask = () => {
    if (!allQuizCorrect || !taskAnswer.trim()) {
      return;
    }
    setTaskCompleted(true);
  };

  const difficultyBadgeColor = difficultyColor[difficulty] || TOKENS.blueLt;

  const lessonShellStyle = {
    minHeight: "100vh",
    background: TOKENS.bg,
    color: TOKENS.text,
    fontFamily: "'Manrope', sans-serif",
    paddingTop: isMobile ? 82 : 96,
    paddingBottom: isMobile ? 94 : 40,
  };

  const pageGridStyle = {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "20px 16px 32px",
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1fr) 320px",
    gap: 20,
  };

  const cardStyle = {
    background: TOKENS.card,
    border: `1px solid ${TOKENS.border}`,
    borderRadius: 16,
    padding: 18,
  };

  return (
    <div style={lessonShellStyle}>
      <style>
        {`
          @keyframes ds-check-pop {
            0% { transform: scale(0.4); opacity: 0; }
            60% { transform: scale(1.15); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
          }

          @keyframes ds-check-stroke {
            0% { opacity: 0; transform: rotate(45deg) scale(0.5); }
            100% { opacity: 1; transform: rotate(45deg) scale(1); }
          }

          @keyframes ds-xp-pulse {
            0% { transform: scale(0.8); opacity: 0; }
            70% { transform: scale(1.08); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
          }

          @keyframes ds-unlock-glow {
            0% { box-shadow: 0 0 0 0 rgba(77, 111, 240, 0); }
            40% { box-shadow: 0 0 0 2px rgba(77, 111, 240, 0.55); }
            100% { box-shadow: 0 0 0 0 rgba(77, 111, 240, 0); }
          }
        `}
      </style>

      <div style={pageGridStyle}>
        <div>
          <section style={{ ...cardStyle, marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <div>
                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 13,
                    letterSpacing: 0.5,
                    fontWeight: 700,
                    color: TOKENS.textSub,
                    marginBottom: 8,
                  }}
                >
                  {trackName} - Lesson {lessonNumber} of {totalLessons}
                </div>
                <h1
                  style={{
                    margin: 0,
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800,
                    fontSize: isMobile ? 27 : 34,
                    lineHeight: 1.15,
                    color: TOKENS.text,
                  }}
                >
                  {lessonTitle}
                </h1>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    alignSelf: "flex-start",
                    background: `${difficultyBadgeColor}20`,
                    border: `1px solid ${difficultyBadgeColor}66`,
                    color: difficultyBadgeColor,
                    borderRadius: 999,
                    padding: "7px 12px",
                    fontSize: 12,
                    fontWeight: 700,
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  {difficulty}
                </span>

                <button
                  type="button"
                  onClick={onBackToTrack}
                  style={{
                    border: `1px solid ${TOKENS.border}`,
                    background: TOKENS.surface,
                    color: TOKENS.textSub,
                    borderRadius: 10,
                    padding: "8px 12px",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: 12,
                    cursor: "pointer",
                  }}
                >
                  Change Track
                </button>

                {canGoPrevious ? (
                  <button
                    type="button"
                    onClick={onPreviousLesson}
                    style={{
                      border: `1px solid ${TOKENS.border}`,
                      background: TOKENS.card,
                      color: TOKENS.textSub,
                      borderRadius: 10,
                      padding: "8px 12px",
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: 12,
                      cursor: "pointer",
                    }}
                  >
                    Previous Lesson
                  </button>
                ) : null}
              </div>
            </div>

            <div style={{ marginTop: 16, marginBottom: 10 }}>
              <div
                aria-label="Lesson progress"
                style={{
                  width: "100%",
                  height: 10,
                  borderRadius: 999,
                  overflow: "hidden",
                  background: TOKENS.surface,
                  border: `1px solid ${TOKENS.border}`,
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${completionProgress}%`,
                    background: `linear-gradient(90deg, ${TOKENS.blue}, ${TOKENS.blueLt})`,
                    transition: "width 300ms ease",
                  }}
                />
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
              <div style={{ color: TOKENS.textSub, fontSize: 13 }}>
                Progress in this track: <strong style={{ color: TOKENS.text }}>{completionProgress}%</strong>
              </div>
              <div style={{ color: TOKENS.textSub, fontSize: 13 }}>
                About <strong style={{ color: TOKENS.text }}>{estimatedTime}</strong>
              </div>
            </div>
          </section>

          <section style={{ ...cardStyle, marginBottom: 16 }}>
            <h2
              style={{
                margin: "0 0 10px",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: 22,
              }}
            >
              What You Will Learn
            </h2>
            <ul style={{ margin: 0, paddingLeft: 20, color: TOKENS.textSub, lineHeight: 1.7 }}>
              {whatYoullLearn.slice(0, 3).map((point, idx) => (
                <li key={`${point}-${idx}`} style={{ marginBottom: 8 }}>
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section style={{ ...cardStyle, marginBottom: 16 }}>
            <h2
              style={{
                margin: "0 0 10px",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: 22,
              }}
            >
              Quick Context
            </h2>
            <p style={{ margin: 0, color: TOKENS.textSub, lineHeight: 1.8, fontSize: 15 }}>{contextText}</p>
          </section>

          <section style={{ ...cardStyle, marginBottom: 16 }}>
            <h2
              style={{
                margin: "0 0 10px",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: 22,
              }}
            >
              What To Focus On
            </h2>
            <ul style={{ margin: 0, paddingLeft: 20, color: TOKENS.textSub, lineHeight: 1.7 }}>
              {focusPoints.slice(0, 3).map((point, idx) => (
                <li key={`${point}-${idx}`} style={{ marginBottom: 8 }}>
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section ref={resourceSectionRef} style={{ ...cardStyle, marginBottom: 16 }}>
            <h2
              style={{
                margin: "0 0 12px",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: 22,
              }}
            >
              Resource
            </h2>

            {resource.type === "video" ? (
              <>
                {resource.embed === false || videoEmbedFailed ? (
                  <div
                    style={{
                      borderRadius: 14,
                      border: `1px solid ${TOKENS.border}`,
                      background: TOKENS.surface,
                      padding: 16,
                      color: TOKENS.textSub,
                      lineHeight: 1.7,
                    }}
                  >
                    <div
                      style={{
                        color: TOKENS.text,
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 700,
                        marginBottom: 6,
                      }}
                    >
                      Embedded player unavailable
                    </div>
                    This lesson video cannot be played inside this page right now. Open it in a new tab using the button below, then return here to continue.
                  </div>
                ) : (
                  <div
                    style={{
                      borderRadius: 14,
                      border: `1px solid ${TOKENS.border}`,
                      overflow: "hidden",
                      background: TOKENS.surface,
                      position: "relative",
                      width: "100%",
                      paddingTop: "56.25%",
                    }}
                  >
                    {loadVideo ? (
                      <iframe
                        title={resource.title}
                        src={resource.url}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        onError={() => setVideoEmbedFailed(true)}
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          border: "none",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          display: "grid",
                          placeItems: "center",
                          color: TOKENS.textSub,
                          fontSize: 14,
                          textAlign: "center",
                          padding: 18,
                        }}
                      >
                        Loading video player only when this section is visible to save mobile data.
                      </div>
                    )}
                  </div>
                )}
                <div style={{ fontSize: 13, color: TOKENS.cyan, marginTop: 10 }}>
                  Source: {resource.sourceWebsite}
                </div>
                <a
                  href={resource.openUrl || resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: 10,
                    border: `1px solid ${TOKENS.blueLt}`,
                    background: TOKENS.blue,
                    color: "#ffffff",
                    borderRadius: 10,
                    textDecoration: "none",
                    padding: "10px 14px",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 800,
                  }}
                >
                  {resource.embed === false || videoEmbedFailed
                    ? "Open Lesson Video in New Tab ->"
                    : "Open Resource ->"}
                </a>
                <button
                  type="button"
                  onClick={onContinueLearning}
                  style={{
                    marginTop: 12,
                    width: "100%",
                    border: `1px solid ${TOKENS.blueLt}`,
                    background: TOKENS.blue,
                    color: TOKENS.text,
                    borderRadius: 10,
                    padding: "12px 14px",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Continue Learning {"\u2192"}
                </button>
              </>
            ) : (
              <div
                style={{
                  background: TOKENS.surface,
                  border: `1px solid ${TOKENS.border}`,
                  borderRadius: 12,
                  padding: 16,
                }}
              >
                <h3
                  style={{
                    margin: "0 0 6px",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 19,
                    fontWeight: 700,
                  }}
                >
                  {resource.title}
                </h3>
                <div style={{ fontSize: 13, color: TOKENS.cyan, marginBottom: 10 }}>
                  Source: {resource.sourceWebsite}
                </div>
                <p style={{ margin: "0 0 12px", color: TOKENS.textSub, lineHeight: 1.7 }}>
                  {resource.description}
                </p>
                <a
                  href={resource.openUrl || resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    border: `1px solid ${TOKENS.blueLt}`,
                    background: TOKENS.blue,
                    color: TOKENS.text,
                    borderRadius: 10,
                    textDecoration: "none",
                    padding: "10px 14px",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Open Resource
                </a>
                <p style={{ margin: "12px 0 0", color: TOKENS.textDim, fontSize: 13 }}>
                  Come back here after reading to complete your lesson and mark it as done.
                </p>
              </div>
            )}
          </section>

          <section ref={quizSectionRef} style={{ ...cardStyle, marginBottom: 16 }}>
            <h2
              style={{
                margin: "0 0 8px",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: 22,
              }}
            >
              Knowledge Check
            </h2>
            <p style={{ margin: "0 0 14px", color: TOKENS.textSub, fontSize: 14 }}>
              Answer all questions correctly to unlock the practical task.
            </p>

            {questions.slice(0, 3).map((q, qIndex) => (
              <div
                key={`${q.question}-${qIndex}`}
                style={{
                  marginBottom: 14,
                  background: TOKENS.surface,
                  border: `1px solid ${TOKENS.border}`,
                  borderRadius: 12,
                  padding: 14,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    marginBottom: 10,
                    fontSize: 17,
                  }}
                >
                  {qIndex + 1}. {q.question}
                </div>

                {q.practicalTask ? (
                  <p
                    style={{
                      margin: "0 0 10px",
                      fontSize: 13,
                      lineHeight: 1.6,
                      color: TOKENS.cyan,
                    }}
                  >
                    {q.practicalTask}
                  </p>
                ) : null}

                <div style={{ display: "grid", gap: 8 }}>
                  {q.options.map((option, optionIndex) => {
                    const selected = quizSelections[qIndex] === optionIndex;
                    const isRightChoice = optionIndex === q.correctIndex;
                    const showCorrect = selected && quizCorrect[qIndex];
                    const showWrong = selected && !quizCorrect[qIndex];

                    return (
                      <button
                        type="button"
                        key={`${option}-${optionIndex}`}
                        onClick={() => handleQuizAnswer(qIndex, optionIndex)}
                        style={{
                          textAlign: "left",
                          border: `1px solid ${
                            showCorrect
                              ? TOKENS.green
                              : showWrong
                                ? "#ef4444"
                                : selected
                                  ? TOKENS.blueLt
                                  : TOKENS.border
                          }`,
                          background: selected ? TOKENS.cardHov : TOKENS.card,
                          color: isRightChoice && showCorrect ? TOKENS.green : TOKENS.text,
                          borderRadius: 10,
                          padding: "10px 12px",
                          cursor: "pointer",
                          fontFamily: "'Manrope', sans-serif",
                          fontSize: 14,
                        }}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                {quizFeedback[qIndex] ? (
                  <p
                    style={{
                      margin: "10px 0 0",
                      fontSize: 13,
                      color: quizCorrect[qIndex] ? TOKENS.green : "#fca5a5",
                    }}
                  >
                    {quizFeedback[qIndex]}
                  </p>
                ) : null}
              </div>
            ))}

            <button
              type="button"
              onClick={onJumpToPractical}
              disabled={!allQuizCorrect}
              style={{
                width: "100%",
                border: `1px solid ${allQuizCorrect ? TOKENS.green : TOKENS.border}`,
                background: allQuizCorrect ? `${TOKENS.green}20` : TOKENS.surface,
                color: allQuizCorrect ? TOKENS.green : TOKENS.textDim,
                borderRadius: 10,
                padding: "11px 12px",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                cursor: allQuizCorrect ? "pointer" : "not-allowed",
              }}
            >
              {allQuizCorrect
                ? "Great work. Continue to the practical task ->"
                : "Answer all 3 correctly to continue"}
            </button>
          </section>

          <section
            ref={practicalSectionRef}
            style={{
              ...cardStyle,
              marginBottom: 16,
              opacity: allQuizCorrect ? 1 : 0.6,
            }}
            aria-disabled={!allQuizCorrect}
          >
            <h2
              style={{
                margin: "0 0 8px",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: 22,
              }}
            >
              Practical Task
            </h2>
            <p style={{ margin: "0 0 12px", color: TOKENS.textSub, lineHeight: 1.7 }}>
              {practicalTask.instruction}
            </p>

            <textarea
              value={taskAnswer}
              onChange={(event) => setTaskAnswer(event.target.value)}
              placeholder={practicalTask.placeholder}
              disabled={!allQuizCorrect}
              style={{
                width: "100%",
                minHeight: 130,
                border: `1px solid ${TOKENS.border}`,
                borderRadius: 10,
                background: TOKENS.surface,
                color: TOKENS.text,
                padding: 12,
                resize: "vertical",
                fontFamily: "'Manrope', sans-serif",
                outline: "none",
              }}
            />

            <button
              type="button"
              onClick={submitTask}
              disabled={!allQuizCorrect || !taskAnswer.trim()}
              style={{
                marginTop: 12,
                width: "100%",
                border: `1px solid ${TOKENS.blueLt}`,
                background:
                  allQuizCorrect && taskAnswer.trim() ? TOKENS.blue : TOKENS.surface,
                color: allQuizCorrect && taskAnswer.trim() ? TOKENS.text : TOKENS.textDim,
                borderRadius: 10,
                padding: "12px 14px",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                cursor:
                  allQuizCorrect && taskAnswer.trim() ? "pointer" : "not-allowed",
              }}
            >
              Submit and Continue {"\u2192"}
            </button>
          </section>

          {readyForCompletion ? (
            <section ref={completionSectionRef} style={{ ...cardStyle, borderColor: `${TOKENS.green}80` }} aria-live="polite">
              <div
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 999,
                  border: `2px solid ${TOKENS.green}`,
                  display: "grid",
                  placeItems: "center",
                  marginBottom: 14,
                  animation: "ds-check-pop 500ms ease",
                  background: `${TOKENS.green}16`,
                }}
              >
                <span
                  style={{
                    color: TOKENS.green,
                    width: 18,
                    height: 32,
                    borderRight: `4px solid ${TOKENS.green}`,
                    borderBottom: `4px solid ${TOKENS.green}`,
                    display: "inline-block",
                    animation: "ds-check-stroke 350ms ease 130ms both",
                  }}
                />
              </div>

              <h2
                style={{
                  margin: "0 0 8px",
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 800,
                  fontSize: 24,
                }}
              >
                {isFinalLesson
                  ? `Final Project Complete 🎉 ${trackName} is ready to close.`
                  : `Lesson ${lessonNumber} Complete 🎉 You are building something real.`}
              </h2>

              {isFinalLesson ? (
                <p style={{ margin: "0 0 8px", color: TOKENS.textSub, lineHeight: 1.6 }}>
                  You just finished the last lesson in this track. Complete the track to unlock your full completion momentum screen.
                </p>
              ) : null}

              <div
                aria-label="Updated lesson progress"
                style={{
                  width: "100%",
                  height: 10,
                  borderRadius: 999,
                  overflow: "hidden",
                  background: TOKENS.surface,
                  border: `1px solid ${TOKENS.border}`,
                  margin: "10px 0 10px",
                }}
              >
                <div
                  style={{
                    width: `${Math.round((lessonNumber / totalLessons) * 100)}%`,
                    height: "100%",
                    background: `linear-gradient(90deg, ${TOKENS.green}, ${TOKENS.cyan})`,
                    transition: "width 300ms ease",
                  }}
                />
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 12px",
                  borderRadius: 999,
                  border: `1px solid ${TOKENS.cyan}`,
                  background: `${TOKENS.cyan}18`,
                  color: TOKENS.cyan,
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  animation: "ds-xp-pulse 450ms ease",
                }}
              >
                +{xpReward} XP
              </div>

              <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
                <button
                  type="button"
                  onClick={onNextLesson}
                  style={{
                    border: `1px solid ${TOKENS.blueLt}`,
                    background: TOKENS.blue,
                    color: TOKENS.text,
                    borderRadius: 10,
                    padding: "11px 14px",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    cursor: "pointer",
                    flex: 1,
                    minWidth: 150,
                  }}
                >
                  {isFinalLesson ? `Complete Track ${"\u2192"}` : `Next Lesson ${"\u2192"}`}
                </button>
                {canGoPrevious ? (
                  <button
                    type="button"
                    onClick={onPreviousLesson}
                    style={{
                      border: `1px solid ${TOKENS.border}`,
                      background: TOKENS.card,
                      color: TOKENS.textSub,
                      borderRadius: 10,
                      padding: "11px 14px",
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      cursor: "pointer",
                      flex: 1,
                      minWidth: 150,
                    }}
                  >
                    Previous Lesson
                  </button>
                ) : null}
                <button
                  type="button"
                  onClick={onBackToTrack}
                  style={{
                    border: `1px solid ${TOKENS.border}`,
                    background: TOKENS.surface,
                    color: TOKENS.textSub,
                    borderRadius: 10,
                    padding: "11px 14px",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    cursor: "pointer",
                    flex: 1,
                    minWidth: 150,
                  }}
                >
                  Back to Track
                </button>
              </div>
            </section>
          ) : null}
        </div>

        {!isMobile ? (
          <aside
            style={{
              position: "sticky",
              top: 20,
              alignSelf: "start",
              ...cardStyle,
            }}
            aria-label="Lesson sidebar"
          >
            <div
              style={{
                marginBottom: 10,
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: 18,
              }}
            >
              Track Progress
            </div>
            <div
              aria-label="Overall track progress"
              style={{
                width: "100%",
                height: 8,
                borderRadius: 999,
                overflow: "hidden",
                background: TOKENS.surface,
                border: `1px solid ${TOKENS.border}`,
                marginBottom: 8,
              }}
            >
              <div
                style={{
                  width: `${trackProgressPercent}%`,
                  height: "100%",
                  background: `linear-gradient(90deg, ${TOKENS.blue}, ${TOKENS.blueLt})`,
                }}
              />
            </div>
            <div style={{ color: TOKENS.textSub, fontSize: 13, marginBottom: 12 }}>
              {trackProgressPercent}% complete
            </div>

            {hasLockedLessons ? (
              <div
                style={{
                  marginBottom: 10,
                  border: `1px solid ${TOKENS.border}`,
                  background: TOKENS.surface,
                  borderRadius: 10,
                  padding: "8px 10px",
                  color: TOKENS.textSub,
                  fontSize: 12,
                  lineHeight: 1.5,
                }}
              >
                Complete the current lesson to unlock Lesson {nextLockedLessonNumber}.
              </div>
            ) : null}

            <div style={{ display: "grid", gap: 8 }}>
              {mergedLessons.map((item, index) => {
                const isCurrent = index === lessonNumber - 1;
                const isFuture = index > lessonNumber - 1 && !item.completed;
                const isDone = item.completed;
                const lessonTarget = index + 1;
                const isUnlocked = lessonTarget <= maxUnlockedLesson;
                const isDisabled = !isUnlocked || isCurrent || typeof onJumpToLesson !== "function";
                const isFreshlyUnlocked = lessonTarget === recentlyUnlockedLesson && isUnlocked && !isCurrent;
                const lessonActionLabel = !isUnlocked
                  ? `Lesson ${lessonTarget} is locked. Complete Lesson ${lessonTarget - 1} to unlock it.`
                  : isCurrent
                    ? `Lesson ${lessonTarget} is your current lesson.`
                    : `Jump to Lesson ${lessonTarget}`;

                return (
                  <button
                    type="button"
                    onClick={() => {
                      if (isDisabled) {
                        return;
                      }
                      onJumpToLesson(lessonTarget);
                    }}
                    disabled={isDisabled}
                    title={lessonActionLabel}
                    aria-label={lessonActionLabel}
                    key={`${item.title}-${index}`}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      border: `1px solid ${
                        isCurrent ? TOKENS.blue : isDone ? `${TOKENS.green}80` : TOKENS.border
                      }`,
                      background: isCurrent
                        ? `${TOKENS.blue}20`
                        : isDone
                          ? `${TOKENS.green}10`
                          : TOKENS.surface,
                      borderRadius: 10,
                      padding: "10px 11px",
                      color: isFuture ? TOKENS.textDim : TOKENS.textSub,
                      cursor: isUnlocked && !isCurrent ? "pointer" : "default",
                      opacity: isUnlocked ? 1 : 0.84,
                      animation: isFreshlyUnlocked ? "ds-unlock-glow 1.2s ease-out" : "none",
                    }}
                  >
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <span
                        style={{
                          color: isDone
                            ? TOKENS.green
                            : isCurrent
                              ? TOKENS.blueLt
                              : isFuture
                                ? TOKENS.textDim
                                : TOKENS.textSub,
                          fontWeight: 800,
                        }}
                      >
                        {isDone ? "✓" : isUnlocked ? index + 1 : "🔒"}
                      </span>
                      <span style={{ fontSize: 13 }}>
                        {item.title}
                        {!isUnlocked ? " (Locked)" : ""}
                        {isFreshlyUnlocked ? " (New)" : ""}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>
        ) : null}
      </div>

      {isMobile ? (
        <div
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 30,
            padding: 12,
            background: "linear-gradient(180deg, rgba(5,7,15,0), rgba(5,7,15,0.95) 30%)",
          }}
        >
          <button
            type="button"
            onClick={() => setIsBottomSheetOpen((prev) => !prev)}
            style={{
              width: "100%",
              background: TOKENS.card,
              border: `1px solid ${TOKENS.border}`,
              borderRadius: 12,
              color: TOKENS.text,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px 14px",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            <span>Track lessons ({trackProgressPercent}%)</span>
            <span>{isBottomSheetOpen ? "Close" : "Open"}</span>
          </button>

          {isBottomSheetOpen ? (
            <div
              style={{
                marginTop: 8,
                maxHeight: "55vh",
                overflowY: "auto",
                background: TOKENS.card,
                border: `1px solid ${TOKENS.border}`,
                borderRadius: 12,
                padding: 12,
              }}
              aria-label="Lesson bottom sheet"
            >
              <div
                aria-label="Overall track progress"
                style={{
                  width: "100%",
                  height: 8,
                  borderRadius: 999,
                  overflow: "hidden",
                  background: TOKENS.surface,
                  border: `1px solid ${TOKENS.border}`,
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    width: `${trackProgressPercent}%`,
                    height: "100%",
                    background: `linear-gradient(90deg, ${TOKENS.blue}, ${TOKENS.blueLt})`,
                  }}
                />
              </div>

                {hasLockedLessons ? (
                  <div
                    style={{
                      marginBottom: 10,
                      border: `1px solid ${TOKENS.border}`,
                      background: TOKENS.surface,
                      borderRadius: 10,
                      padding: "8px 10px",
                      color: TOKENS.textSub,
                      fontSize: 12,
                      lineHeight: 1.5,
                    }}
                  >
                    Complete the current lesson to unlock Lesson {nextLockedLessonNumber}.
                  </div>
                ) : null}

              <div style={{ display: "grid", gap: 8 }}>
                {mergedLessons.map((item, index) => {
                  const isCurrent = index === lessonNumber - 1;
                  const isFuture = index > lessonNumber - 1 && !item.completed;
                  const isDone = item.completed;
                  const lessonTarget = index + 1;
                  const isUnlocked = lessonTarget <= maxUnlockedLesson;
                  const isDisabled = !isUnlocked || isCurrent || typeof onJumpToLesson !== "function";
                  const isFreshlyUnlocked = lessonTarget === recentlyUnlockedLesson && isUnlocked && !isCurrent;
                  const lessonActionLabel = !isUnlocked
                    ? `Lesson ${lessonTarget} is locked. Complete Lesson ${lessonTarget - 1} to unlock it.`
                    : isCurrent
                      ? `Lesson ${lessonTarget} is your current lesson.`
                      : `Jump to Lesson ${lessonTarget}`;

                  return (
                    <button
                      type="button"
                      onClick={() => {
                        if (isDisabled) {
                          return;
                        }
                        onJumpToLesson(lessonTarget);
                        setIsBottomSheetOpen(false);
                      }}
                      disabled={isDisabled}
                      title={lessonActionLabel}
                      aria-label={lessonActionLabel}
                      key={`${item.title}-${index}`}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        border: `1px solid ${
                          isCurrent ? TOKENS.blue : isDone ? `${TOKENS.green}80` : TOKENS.border
                        }`,
                        background: isCurrent
                          ? `${TOKENS.blue}20`
                          : isDone
                            ? `${TOKENS.green}10`
                            : TOKENS.surface,
                        borderRadius: 10,
                        padding: "10px 11px",
                        color: isFuture ? TOKENS.textDim : TOKENS.textSub,
                        cursor: isUnlocked && !isCurrent ? "pointer" : "default",
                        opacity: isUnlocked ? 1 : 0.84,
                        animation: isFreshlyUnlocked ? "ds-unlock-glow 1.2s ease-out" : "none",
                      }}
                    >
                      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <span
                          style={{
                            color: isDone
                              ? TOKENS.green
                              : isCurrent
                                ? TOKENS.blueLt
                                : isFuture
                                  ? TOKENS.textDim
                                  : TOKENS.textSub,
                            fontWeight: 800,
                          }}
                        >
                          {isDone ? "✓" : isUnlocked ? index + 1 : "🔒"}
                        </span>
                        <span style={{ fontSize: 13 }}>
                          {item.title}
                          {!isUnlocked ? " (Locked)" : ""}
                          {isFreshlyUnlocked ? " (New)" : ""}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
