"use client";
import styles from "../page.module.css";
import Image from "next/image";
import { useRouter } from 'next/navigation';

type PropsType = {
    name: string;
    link: string;
    icon: string;
    onClick: () => void;
}

export const SignOutLink = (props: PropsType) => {
    const router = useRouter();

    const onClick = async () => {
        props.onClick();
        await signOut();
    };

    const signOut = async () => {
        const response = await fetch('/api/auth/sign-out', { method: 'POST' });

        if (response.ok) {
            router.push('/auth');
        } else {
            console.error('Sign out failed');
        }
    };

    return (
        <div
            className={styles.linksContainerLink}
            onClick={onClick}
        >
            <Image className={styles.linkIcon} src={props.icon} alt={props.name} />
            <div className={styles.linkName} role={"button"}>{props.name}</div>
        </div>
    );
};