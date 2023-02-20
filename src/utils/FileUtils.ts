import { VideoTypeList } from '../definition/VideoTypeList'

export class FileUtils {
    public static getBase64File(file: File) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()

            reader.readAsDataURL(file)

            reader.onload = () => {
                console.log('FileUtils getBase64File reader', reader)
                resolve(reader)
            }


            reader.onerror = error => reject(error)
        })
    }

    public static getFileSuffix(path: string) {
        let suffix: string = ''
        suffix = path.substring(path.lastIndexOf('.') + 1)
        return suffix
    }

    public static isVideo(path: string) {
        let isVideo: boolean = false
        let suffix = FileUtils.getFileSuffix(path)
        if (VideoTypeList.includes(suffix)) {
            isVideo = true
        }
        return isVideo
    }
}
