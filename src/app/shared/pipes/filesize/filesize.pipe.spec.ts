import { FilesizePipe } from './filesize.pipe';

describe('FilesizePipe', () => {
  let pipe: FilesizePipe;

  beforeAll(() => {
    pipe = new FilesizePipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform 10,000 bytes to 10KB', () => {
    const transformedValue = pipe.transform(10000);
    expect(transformedValue).toEqual('10.0000KB');
    expect(pipe.transform(10000, 'KB')).toEqual('10.0000KB');
  })
  
  it('should transform 10,00,000 bytes to 10MB', () => {
    const transformedValue = pipe.transform(1000000, 'MB');
    expect(transformedValue).toEqual('1.0000MB');
  })
  
  it('should transform 10,000 bytes to 10000 bytes', () => {
    const transformedValue = pipe.transform(10000, 'TB');
    expect(transformedValue).toEqual('10000Bytes');
  })
  
  it('should transform 10,00,00,000 bytes to 10GB', () => {
    const transformedValue = pipe.transform(100000000, 'GB');
    expect(transformedValue).toEqual('0.1000GB');
  });
});
