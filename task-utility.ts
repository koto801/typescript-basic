type Post = {
  id: number;          // id
  title: string;       // タイトル
  body: string;        // 本文
  published: boolean;  // 公開済みかどうか
};

// 編集中の投稿データを表す型（全プロパティが省略可能）
type EditingPost = Partial<Post>;

// 一覧表示用の投稿データを表す型（idとtitleのみ）
type PostListItem = Pick<Post, "id" | "title">;

// 公開済みの投稿データを表す型（全プロパティが読み取り専用）
type PublishedPost = Readonly<Post>;