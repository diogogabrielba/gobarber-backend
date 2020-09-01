export default interface IStorageProvider {
  saveFile(file: string): Promise<string>;
  deleteFile(file: stirng): Promise<void>;
}
