interface ErrorPageProps {
  title?: string;
  message?: string;
  showBackButton?: boolean;
  showHomeButton?: boolean;
}

export interface SetIsOpen {
  setIsOpen: (isOpen: boolean) => void;
}

export interface NavMenuProps extends SetIsOpen {
  isOpen?: boolean;
}

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostsProps {
  limit?: number;
  isAllPosts?: boolean;
}
export interface IsRecent {
  isRecent?: boolean;
}
export interface PostCardProps extends IsRecent {
  post: Post;
}
export interface LoadingProps extends IsRecent {
  numberOfCards?: number;
  isPost?: boolean;
}
export interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export interface TagColor {
  text: string;
  bg: string;
}

export type Category =
  | "Design"
  | "Research"
  | "Presentation"
  | "Tools"
  | "Development"
  | "SaaS";
