import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AppShell } from "./components/AppShell";
import Home from "./pages/Home";
const Lessons = lazy(() => import("./pages/Lessons"));
const LessonDetail = lazy(() => import("./pages/LessonDetail"));
const Chat = lazy(() => import("./pages/Chat"));
const History = lazy(() => import("./pages/History"));
const Profile = lazy(() => import("./pages/Profile"));
const Flashcards = lazy(() => import("./pages/Flashcards"));
const WordGame = lazy(() => import("./pages/WordGame"));
const Listening = lazy(() => import("./pages/Listening"));
const Matching = lazy(() => import("./pages/Matching"));
const Spelling = lazy(() => import("./pages/Spelling"));
const Scramble = lazy(() => import("./pages/Scramble"));
const TranslationRecall = lazy(() => import("./pages/TranslationRecall"));
const WordRace = lazy(() => import("./pages/WordRace"));
const GamesLeaderboard = lazy(() => import("./pages/GamesLeaderboard"));
const Challenge = lazy(() => import("./pages/Challenge"));
const PictureVocab = lazy(() => import("./pages/PictureVocab"));
const IpaChart = lazy(() => import("./pages/IpaChart"));
const IpaTranscribe = lazy(() => import("./pages/IpaTranscribe"));
const Saved = lazy(() => import("./pages/Saved"));
const Rankings = lazy(() => import("./pages/Rankings"));
const Mistakes = lazy(() => import("./pages/Mistakes"));
const Writing = lazy(() => import("./pages/Writing"));
const Translation = lazy(() => import("./pages/Translation"));
const Reading = lazy(() => import("./pages/Reading"));
const Dictation = lazy(() => import("./pages/Dictation"));
const Help = lazy(() => import("./pages/Help"));
const Appearance = lazy(() => import("./pages/Appearance"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Trang dang nhap dung mot minh; moi trang con lai deu nam trong shell de tren
// PC luon co sidebar dieu huong (truoc day chi 5 trang co, vao game la mat nav).
const BARE_ROUTES = new Set(["/login"]);

export default function App() {
  const location = useLocation();
  const useShell = !BARE_ROUTES.has(location.pathname);

  const routes = (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/lesson" element={<LessonDetail />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/word-game" element={<WordGame />} />
        <Route path="/listening-game" element={<Listening />} />
        <Route path="/matching-game" element={<Matching />} />
        <Route path="/spelling-game" element={<Spelling />} />
        <Route path="/word-race" element={<WordRace />} />
        <Route path="/scramble-game" element={<Scramble />} />
        <Route path="/translation-recall" element={<TranslationRecall />} />
        <Route path="/dictation" element={<Dictation />} />
        <Route path="/games-leaderboard" element={<GamesLeaderboard />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/picture-vocab" element={<PictureVocab />} />
        <Route path="/ipa-chart" element={<IpaChart />} />
        <Route path="/ipa-transcribe" element={<IpaTranscribe />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/mistakes" element={<Mistakes />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/translation" element={<Translation />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/help" element={<Help />} />
        <Route path="/theme" element={<Appearance />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );

  return useShell ? <AppShell>{routes}</AppShell> : routes;
}
