

export interface PageContent {
    slug: string;
    title: string;
    category: string;
    metaDescription : string;
    questions: {
      question: string;
      answer: string[];
    }[];
    videoUrl: string;
    recentHeadings: string[];
  }


// types/content.ts

// export interface PageContent {
//     slug: string;
//     title: string;
//     questions: {
//       question: string;
//       answer: string;
//     }[];
//     videoUrl: string;
//     recentHeadings: string[];
//   }