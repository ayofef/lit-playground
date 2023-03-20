export const DATA_KEYS = ["public_repos", "followers", "following"] as const;

export const DATA_LABEL_MAP: Record<typeof DATA_KEYS[number], string> = {
    public_repos: "Repos",
    followers: "Followers",
    following: "Following",
} as const;
