import {StructureBuilder} from 'sanity/structure'

const singletonTypes = new Set(['siteSettings'])

export const deskStructure = (S) =>
  S.list()
    .title('DigitalSphere CMS')
    .items([
      S.listItem()
        .title('CONTENT')
        .child(
          S.list()
            .title('CONTENT')
            .items([
              S.documentTypeListItem('blogPost').title('Blog Posts'),
              S.documentTypeListItem('event').title('Events'),
              S.documentTypeListItem('eventGallery').title('Events Gallery'),
              S.documentTypeListItem('opportunity').title('Opportunities'),
            ]),
        ),
      S.listItem()
        .title('LEARNING')
        .child(
          S.list()
            .title('LEARNING')
            .items([
              S.documentTypeListItem('learningTrack').title('Learning Tracks'),
              S.documentTypeListItem('resourceItem').title('Resources'),
            ]),
        ),
      S.listItem()
        .title('COMMUNITY')
        .child(
          S.list()
            .title('COMMUNITY')
            .items([
              S.documentTypeListItem('teamMember').title('Team Members'),
              S.documentTypeListItem('communityLink').title('Community Links'),
              S.documentTypeListItem('campusChapter').title('Campus Chapters'),
            ]),
        ),
      S.listItem()
        .title('SETTINGS')
        .child(
          S.list()
            .title('SETTINGS')
            .items([
              S.listItem()
                .title('Site Settings')
                .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
              S.documentTypeListItem('faqItem').title('FAQ Items'),
            ]),
        ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'blogPost',
            'event',
            'eventGallery',
            'opportunity',
            'learningTrack',
            'resourceItem',
            'teamMember',
            'communityLink',
            'campusChapter',
            'faqItem',
          ].includes(listItem.getId()) && !singletonTypes.has(listItem.getId()),
      ),
    ])
