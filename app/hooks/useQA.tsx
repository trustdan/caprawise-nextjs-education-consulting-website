import { useState } from 'react';
import { useLanguageContext } from './useLanguageContext';
export default function useQA() {

    const [isOpen, setIsOpen] = useState(false);
    const language = useLanguageContext().language;

    return { isOpen, setIsOpen, language };

}