
export type UploadType = 'drag' | 'select';

export interface UploadProps {
  type?: UploadType;
  action?: string;
}