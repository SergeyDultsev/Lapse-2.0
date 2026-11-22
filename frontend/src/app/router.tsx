import { FavoritesPage, FeedPage, HistoryPage, ProfilePage, SearchPage, SettingsPage } from "@/pages";

export const routers = [
    { path: '/', element: <FeedPage /> },
    { path: '/profile', element: <ProfilePage /> },
    { path: '/search', element: <SearchPage /> },
    { path: '/history', element: <HistoryPage /> },
    { path: '/favorites', element: <FavoritesPage /> },
    { path: '/settings', element: <SettingsPage /> },
];