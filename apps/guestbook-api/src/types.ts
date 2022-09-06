export interface Body {
  name?: string;
  comment?: string;
  captcha_response?: string;
}

export interface PostsSchema {
  id: string;
  name?: string;
  comment: string;
  created_at: string;
}