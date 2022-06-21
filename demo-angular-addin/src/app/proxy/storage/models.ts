
export interface BlobDto {
  content: number[];
  name?: string;
}

export interface GetBlobRequestDto {
  name: string;
}

export interface SaveBlobInputDto {
  content: number[];
  name: string;
}
