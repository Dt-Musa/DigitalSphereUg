import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import LessonDemoPage from "./LessonDemoPage";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

vi.mock("./LessonPage", () => ({
  default: function MockLessonPage(props) {
    return (
      <div>
        <div data-testid="track-name">{props.trackName}</div>
        <div data-testid="lesson-number">{props.lessonNumber}</div>
        <button type="button" onClick={props.onNextLesson}>Next lesson</button>
        <button type="button" onClick={props.onPreviousLesson}>Previous lesson</button>
        <button type="button" onClick={props.onLessonCompleted}>Complete lesson</button>
      </div>
    );
  },
}));

function writeStorage(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

describe("LessonDemoPage", () => {
  beforeEach(() => {
    mockNavigate.mockReset();
    window.localStorage.clear();
    Object.defineProperty(window, "isSecureContext", {
      value: true,
      configurable: true,
    });
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });
  });

  it("navigates to the lesson from route params when slug and lesson are provided", async () => {
    render(
      <LessonDemoPage
        initialTrackSlug="track-1-blockchain-basics"
        initialLessonNumber={3}
      />,
    );

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(
        "/learn/track-1-blockchain-basics/lesson/3",
        { replace: true },
      );
    });

    expect(screen.getByTestId("lesson-number")).toHaveTextContent("3");
  });

  it("resumes from persisted lesson number when route lesson is not provided", async () => {
    writeStorage("digitalsphereug.learn.activeLessonByTrack", {
      basics: 5,
    });

    render(
      <LessonDemoPage
        initialTrackSlug="track-1-blockchain-basics"
        initialLessonNumber={null}
      />,
    );

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(
        "/learn/track-1-blockchain-basics/lesson/5",
        { replace: true },
      );
    });

    expect(screen.getByTestId("lesson-number")).toHaveTextContent("5");
  });

  it("moves to next lesson and persists active lesson state", async () => {
    render(
      <LessonDemoPage
        initialTrackSlug="track-1-blockchain-basics"
        initialLessonNumber={1}
      />,
    );

    await waitFor(() => {
      expect(screen.getByTestId("lesson-number")).toHaveTextContent("1");
    });

    fireEvent.click(screen.getByRole("button", { name: "Next lesson" }));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(
        "/learn/track-1-blockchain-basics/lesson/2",
        { replace: false },
      );
    });

    expect(screen.getByTestId("lesson-number")).toHaveTextContent("2");

    const storedLessonNumber = JSON.parse(
      window.localStorage.getItem("digitalsphereug.learn.activeLessonNumber"),
    );
    const storedByTrack = JSON.parse(
      window.localStorage.getItem("digitalsphereug.learn.activeLessonByTrack"),
    );

    expect(storedLessonNumber).toBe(2);
    expect(storedByTrack).toMatchObject({ basics: 2 });
  });

  it("clamps out-of-range lesson params to the last lesson", async () => {
    render(
      <LessonDemoPage
        initialTrackSlug="track-1-blockchain-basics"
        initialLessonNumber={999}
      />,
    );

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(
        "/learn/track-1-blockchain-basics/lesson/8",
        { replace: true },
      );
    });

    expect(screen.getByTestId("lesson-number")).toHaveTextContent("8");
  });

  it("opens a track lesson on the first click from track list", async () => {
    render(<LessonDemoPage showTrackList />);

    const startButtons = screen.getAllByRole("button", { name: /start from lesson 1/i });
    fireEvent.click(startButtons[0]);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(
        "/learn/track-1-blockchain-basics/lesson/1",
        { replace: false },
      );
    });
  });

  it("marks only the clicked track as copied when sharing", async () => {
    render(<LessonDemoPage showTrackList />);

    const shareButtons = screen.getAllByRole("button", { name: "Share Track" });
    expect(shareButtons.length).toBeGreaterThan(1);

    fireEvent.click(shareButtons[0]);

    await waitFor(() => {
      expect(screen.getAllByText("Link copied!")).toHaveLength(1);
    });
  });
});
