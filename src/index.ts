import copy from 'copy-to-clipboard';
import { useState, useRef, useEffect, useCallback } from 'react';

export default function useCopy(str: string): [boolean, () => void, (value: boolean) => void] {
    const copyableString = useRef(str);
    const [copied, setCopied] = useState(false);
    const copyAction = useCallback(() => {
        const copiedString = copy(copyableString.current);
        setCopied(copiedString);
    }, [copyableString]);

    useEffect(() => {
        copyableString.current = str;
    }, [str]);

    return [copied, copyAction, setCopied];
}
