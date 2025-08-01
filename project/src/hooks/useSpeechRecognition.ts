import { useEffect, useRef, useState } from 'react';

interface UseSpeechRecognitionProps {
    input: string;
    setInput: (value: string) => void;
}

export const useSpeechRecognition = ({ input, setInput }: UseSpeechRecognitionProps) => {
    const [isListening, setIsListening] = useState(false);
    const recognitionRef = useRef<SpeechRecognition | null>(null);

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            console.warn(' Web Speech API не поддерживается этим браузером');
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = 'ru-RU';
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = () => {
            setIsListening(true);
            if(input){
                setInput('')
            }
        };

        recognition.onresult = (event: SpeechRecognitionEvent) => {

            const transcript = Array.from(event.results)
                .map(r => r[0].transcript)
                .join('');

            console.log(' Распознано:', transcript);

            setInput(input + transcript);
        };

        recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
            console.error('Ошибка распознавания:', event.error);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognitionRef.current = recognition;
    }, [input, setInput]);

    const startListening = () => {
        if(input){
            setInput('')
        }
        if (recognitionRef.current && !isListening) {
            recognitionRef.current.start();
        }
    };

    const stopListening = () => {
        if (recognitionRef.current && isListening) {
            recognitionRef.current.stop();
        }
    };

    return {
        isListening,
        startListening,
        stopListening,
    };
};
