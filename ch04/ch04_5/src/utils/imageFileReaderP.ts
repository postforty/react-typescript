// imageFileReaderP에서 접미사 'P'는 Promise 객체를 반환하는 함수
export const imageFileReaderP = (file: Blob) =>
  new Promise<string>((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = (e: ProgressEvent<FileReader>) => {
      const result = e.target?.result

      if (result && typeof result === 'string') resolve(result)
      else reject(new Error(`imageFileReaderP: can't read image file`))
    }

    fileReader.readAsDataURL(file)
  })
