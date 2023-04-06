import { useEffect } from "react";

function ChangeTitle({ title }) {
    useEffect(() => {
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                setTimeout(() => {
                    document.title = '5$ IF YOU CLICK NOW!!!';
                }, 3000);
            } else {
                document.title = title;
            }
        });
    }, [])
}

export default ChangeTitle