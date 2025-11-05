import { useEffect, useRef, useState } from "react";
import { DATA } from "./data";
import { Progress } from "./components/ui/progress";
import { Badge } from "./components/ui/badge";
import ReactConfetti from "react-confetti";
import { ArrowLeft, Menu, X } from "lucide-react";
import applause from "@/assets/applause.mp3";

export default function App() {
  const [subjectId, setSubjectId] = useState<string | null>(null);
  const [examId, setExamId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const subjects = DATA;
  const subject = subjects.find((s) => s.id === subjectId) ?? null;
  const exam = subject?.exams.find((e) => e.id === examId) ?? null;
  const questions = exam?.questions ?? [];

  const total = questions.length;
  const answeredCount = Object.keys(answers).length;
  const progress = total ? (answeredCount / total) * 100 : 0;
  const isLastQuestion = currentIndex === total - 1;
  const applauseRef = useRef<HTMLAudioElement | null>(null);

  function selectChoice(qid: string, choiceId: string) {
    if (submitted) return;
    setSelectedChoice(choiceId);
    setAnswers((prev) => ({ ...prev, [qid]: choiceId }));
  }

  function submitExam() {
    if (!exam) return;
    setSubmitted(true);

    const score = questions.reduce((acc, q) => {
      const given = answers[q.id];
      return acc + (given && given === q.answerId ? 1 : 0);
    }, 0);

    if (score / total >= 0.75) {
      setShowConfetti(true);
    }
  }

  useEffect(() => {
    if (showConfetti && applauseRef.current) {
      applauseRef.current.currentTime = 0;
      applauseRef.current.play().catch(() => {
        console.warn("Autoplay blocked — user interaction needed.");
      });
    }
  }, [showConfetti]);

  function restartExam() {
    setAnswers({});
    setSubmitted(false);
    setCurrentIndex(0);
    setSelectedChoice(null);
    setShowConfetti(false);
  }

  function resetAll() {
    setAnswers({});
    setSubmitted(false);
    setExamId(null);
    setSubjectId(null);
    setCurrentIndex(0);
    setSelectedChoice(null);
    setShowConfetti(false);
    setIsMobileMenuOpen(false);
  }

  function goToNextQuestion() {
    if (currentIndex < total - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedChoice(null);
    }
  }

  function goToPreviousQuestion() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedChoice(answers[questions[currentIndex - 1].id] || null);
    }
  }

  const score = questions.reduce((acc, q) => {
    const given = answers[q.id];
    return acc + (given && given === q.answerId ? 1 : 0);
  }, 0);

  const percentage = total ? Math.round((score / total) * 100) : 0;

  const subjectIcons: Record<string, string> = {
    math: "📘",
    science: "🧪",
    english: "✏️",
    history: "🏺",
    "science-year2": "🧪",
    "history-year2": "🏺",
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-100 via-yellow-100 to-sky-100 p-3 sm:p-4 md:p-6 flex items-start justify-center font-[Nunito_Sans]">
      {showConfetti && (
        <ReactConfetti numberOfPieces={400} recycle={false} gravity={0.3} />
      )}

      <audio ref={applauseRef} src={applause} preload="auto" />

      <div className="w-full max-w-3xl bg-white rounded-3xl sm:rounded-4xl shadow-xl sm:shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden">
        <div className="absolute text-4xl sm:text-5xl md:text-6xl opacity-10 -top-4 sm:-top-6 right-4 sm:right-8 animate-spin-slow">
          🎈
        </div>
        <div className="absolute text-3xl sm:text-4xl md:text-5xl opacity-10 bottom-6 sm:bottom-10 left-4 sm:left-8 animate-bounce">
          ⭐
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden absolute top-4 right-4 z-20 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <header className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4 sm:gap-0">
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-sky-500 via-purple-500 to-pink-500 leading-tight">
              🎯 Mid Exam Questions!
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Learn, play, and test your knowledge! 🌟
            </p>
          </div>
          <div
            className={`text-right transition-all duration-300 ${
              isMobileMenuOpen ? "block" : "hidden sm:block"
            }`}
          >
            <Badge className="bg-linear-to-r from-pink-400 to-yellow-400 text-white shadow-md text-xs sm:text-sm">
              {subject?.title ?? "Choose subject"}
            </Badge>
            <div className="text-xs text-gray-400 mt-1 whitespace-nowrap">
              {exam?.title ?? "Select exam"}
            </div>
          </div>
        </header>

        {/* SUBJECT SELECTION */}
        {!subjectId && (
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {subjects.map((s) => (
              <button
                key={s.id}
                onClick={() => setSubjectId(s.id)}
                className="rounded-2xl sm:rounded-3xl bg-white border-2 sm:border-4 border-transparent hover:border-sky-300 hover:scale-105 transition-all shadow-md hover:shadow-lg text-center p-4 sm:p-6"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3">
                  {subjectIcons[s.id] ?? "📚"}
                </div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 truncate">
                  {s.title}
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {s.exams.length} quizzes
                </p>
              </button>
            ))}
          </section>
        )}

        {/* EXAM SELECTION */}
        {subjectId && !examId && (
          <section className="mb-6 sm:mb-8">
            <button
              onClick={() => setSubjectId(null)}
              className="text-sm text-indigo-500 hover:underline mb-4 sm:mb-6 flex items-center gap-1"
            >
              <ArrowLeft size={16} /> Back to subjects
            </button>
            <div className="grid gap-3 sm:gap-4">
              {subject?.exams.map((e) => (
                <div
                  key={e.id}
                  className="p-3 sm:p-4 md:p-5 border-2 sm:border-4 border-transparent rounded-2xl sm:rounded-3xl flex flex-col sm:flex-row sm:items-center justify-between bg-linear-to-r from-sky-50 to-pink-50 hover:border-sky-200 hover:shadow-md transition-all gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-base sm:text-lg text-gray-800 truncate">
                      {e.title}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">
                      📝 {e.questions.length} questions
                    </div>
                  </div>
                  <button
                    onClick={() => setExamId(e.id)}
                    className="bg-linear-to-r from-sky-500 to-purple-500 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-lg sm:rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all text-sm sm:text-base whitespace-nowrap"
                  >
                    Start Quiz 🚀
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* EXAM VIEW */}
        {exam && (
          <section>
            {!submitted && (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
                <div className="flex-1 min-w-0">
                  <div className="text-xs sm:text-sm text-gray-500 font-medium">
                    Question {currentIndex + 1} of {total}
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-gray-800 mt-1 wrap-break-word">
                    {questions[currentIndex].prompt}
                  </div>
                </div>
                <div className="w-full sm:w-48">
                  <Progress value={progress} className="h-2 sm:h-3" />
                  <div className="text-xs text-gray-500 mt-1 sm:mt-2 text-center">
                    {answeredCount}/{total} answered
                  </div>
                </div>
              </div>
            )}

            {!submitted && (
              <div className="grid gap-3 sm:gap-4 mb-6 sm:mb-8">
                {questions[currentIndex].choices.map((c) => {
                  const chosen = answers[questions[currentIndex].id] === c.id;
                  const isCorrect = questions[currentIndex].answerId === c.id;

                  const submittedClass = submitted
                    ? isCorrect
                      ? "bg-green-100 border-green-400"
                      : chosen
                      ? "bg-red-100 border-red-400"
                      : "opacity-60"
                    : chosen
                    ? "bg-sky-100 border-sky-400 scale-105"
                    : "bg-white border-transparent hover:border-sky-200";

                  return (
                    <button
                      key={c.id}
                      onClick={() =>
                        selectChoice(questions[currentIndex].id, c.id)
                      }
                      className={`w-full text-left p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 sm:border-4 transition-all duration-300 transform hover:scale-105 active:scale-95 ${submittedClass}`}
                      disabled={submitted}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span
                          className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-base sm:text-xl font-bold rounded-full text-white shadow-md ${
                            submitted
                              ? isCorrect
                                ? "bg-green-500"
                                : chosen
                                ? "bg-red-500"
                                : "bg-gray-300"
                              : chosen
                              ? "bg-linear-to-br from-sky-400 to-purple-400"
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {c.id}
                        </span>
                        <span className="font-semibold text-gray-700 text-sm sm:text-lg wrap-break-word flex-1">
                          {c.text}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-0">
              {!submitted && (
                <div className="flex gap-2 sm:gap-3 order-2 sm:order-1">
                  <button
                    onClick={goToPreviousQuestion}
                    disabled={currentIndex === 0}
                    className="flex-1 sm:flex-none px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-200 disabled:opacity-50 font-medium hover:bg-gray-50 transition-all text-sm sm:text-base"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={goToNextQuestion}
                    disabled={
                      currentIndex === total - 1 || selectedChoice === null
                    }
                    className="flex-1 sm:flex-none px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-200 disabled:opacity-50 font-medium hover:bg-gray-50 transition-all text-sm sm:text-base"
                  >
                    Next →
                  </button>
                </div>
              )}

              <div className="flex flex-wrap gap-2 sm:gap-3 order-1 sm:order-2 justify-center sm:justify-end">
                {!submitted ? (
                  <>
                    {isLastQuestion && (
                      <button
                        onClick={submitExam}
                        disabled={!answers[questions[currentIndex].id]}
                        className="flex-1 sm:flex-none bg-linear-to-r from-green-500 to-emerald-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105 disabled:opacity-50 text-sm sm:text-base text-center"
                      >
                        Submit 🎉
                      </button>
                    )}
                    <button
                      onClick={restartExam}
                      className="flex-1 sm:flex-none px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-200 font-medium hover:bg-gray-50 transition-all text-sm sm:text-base"
                    >
                      Restart
                    </button>
                  </>
                ) : (
                  <>
                    <div className="text-base sm:text-lg font-bold text-gray-800 bg-linear-to-r from-yellow-100 to-orange-100 px-3 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl text-center flex-1 sm:flex-none">
                      Score:{" "}
                      <span className="text-xl sm:text-2xl">
                        {score}/{total}
                      </span>
                    </div>
                    <button
                      onClick={restartExam}
                      className="flex-1 sm:flex-none px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-200 font-medium hover:bg-gray-50 transition-all text-sm sm:text-base"
                    >
                      Try Again
                    </button>
                    <button
                      onClick={resetAll}
                      className="flex-1 sm:flex-none px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-linear-to-r from-sky-500 to-purple-500 text-white font-medium hover:shadow-lg transition-all text-sm sm:text-base"
                    >
                      New Quiz
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* RESULTS */}
            {submitted && (
              <div className="mt-6 sm:mt-8 md:mt-10 text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 mb-2 sm:mb-3">
                  🎉 Quiz Complete!
                </h3>
                <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 font-extrabold bg-linear-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
                  {score}/{total}
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3 sm:mb-4 px-2">
                  {percentage >= 80
                    ? "🌟 Amazing work, superstar!"
                    : percentage >= 60
                    ? "👍 Great job! Keep going!"
                    : "💪 You're learning fast! Try again!"}
                </p>
                <div className="flex justify-center gap-1 sm:gap-2 mt-3 sm:mt-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-2xl sm:text-3xl ${
                        i < Math.round(percentage / 33)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        <footer className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-500 px-2">
          Made with ❤️ for Year 3 students • Keep smiling and learning 😄
        </footer>
      </div>
    </div>
  );
}
