import { useState } from "react"
import lang from "../lang.json"
const useTranslate = () => {
    const [currentLang, setCurrentLang] = useState("es")
    return {
        getLang: () => currentLang,
        setLang: (newLang: "es" | "en") => setCurrentLang(newLang),
        translate: (key: string) => {

            const splitKey = [currentLang, ...key.split(".")]

            let value: any = lang
            while (splitKey.length) {
                let currentKey: string = splitKey.shift() || ''
                if (currentKey in value) {
                    value = value[currentKey]
                }
            }

            return typeof value === 'string' ? value : key
        }
    }
}

export default useTranslate