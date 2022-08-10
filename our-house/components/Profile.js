import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import styles from "../styles/Profile.module.css";
import Link from "next/link";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div className={styles.profile}>
        <div className={styles.bar}>
          <div className={styles.right}>
            <h2>{user.name}</h2>
          </div>
          <Link href="/UserHome">
            <a>
              <img src="/user_avatar_1.svg" alt={user.name} />
            </a>
          </Link>
        </div>
      </div>
    )
  );
}
