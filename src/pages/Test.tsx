
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TestIntro } from "@/components/test/TestIntro";
import { TestQuestions } from "@/components/test/TestQuestions";
import { TestResults } from "@/components/test/TestResults";

export type TestAnswer = {
  questionId: number;
  answer: number;
};

export type TestResult = {
  softSkills: { [key: string]: number };
  hardSkills: { [key: string]: number };
  interests: { [key: string]: number };
  recommendedMajors: string[];
  topInterestCategory: string;
};

const Test = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'test' | 'results'>('intro');
  const [answers, setAnswers] = useState<TestAnswer[]>([]);
  const [results, setResults] = useState<TestResult | null>(null);

  const handleStartTest = () => {
    setCurrentStep('test');
  };

  const handleTestComplete = (testAnswers: TestAnswer[]) => {
    setAnswers(testAnswers);
    const calculatedResults = calculateResults(testAnswers);
    setResults(calculatedResults);
    setCurrentStep('results');
  };

  const handleRetakeTest = () => {
    setAnswers([]);
    setResults(null);
    setCurrentStep('intro');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      <main className="py-8">
        {currentStep === 'intro' && (
          <TestIntro onStartTest={handleStartTest} />
        )}
        
        {currentStep === 'test' && (
          <TestQuestions onComplete={handleTestComplete} />
        )}
        
        {currentStep === 'results' && results && (
          <TestResults results={results} onRetakeTest={handleRetakeTest} />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

const calculateResults = (answers: TestAnswer[]): TestResult => {
  const softSkills = {
    "Komunikasi": 0,
    "Kepemimpinan": 0,
    "Kerjasama Tim": 0,
    "Kreativitas": 0,
    "Problem Solving": 0
  };

  const hardSkills = {
    "Teknologi": 0,
    "Matematika": 0,
    "Bahasa": 0,
    "Sains": 0,
    "Seni": 0
  };

  const interests = {
    "Artistik": 0,
    "Ilmiah": 0,
    "Sosial": 0,
    "Teknis": 0,
    "Bisnis": 0,
    "Konvensional": 0
  };

  // Calculate scores based on answers
  answers.forEach((answer) => {
    const score = answer.answer;
    const questionId = answer.questionId;

    // Map questions to skill categories (simplified logic)
    if (questionId <= 5) {
      softSkills["Komunikasi"] += score;
    } else if (questionId <= 10) {
      softSkills["Kepemimpinan"] += score;
    } else if (questionId <= 15) {
      interests["Artistik"] += score;
    } else if (questionId <= 20) {
      interests["Ilmiah"] += score;
    } else if (questionId <= 25) {
      interests["Teknis"] += score;
    } else {
      interests["Sosial"] += score;
    }
  });

  // Normalize scores to percentage
  Object.keys(softSkills).forEach(key => {
    softSkills[key] = Math.min(100, (softSkills[key] / 20) * 100);
  });

  Object.keys(interests).forEach(key => {
    interests[key] = Math.min(100, (interests[key] / 20) * 100);
  });

  // Find top interest category
  const topInterestCategory = Object.keys(interests).reduce((a, b) => 
    interests[a] > interests[b] ? a : b
  );

  // Generate major recommendations
  const majorRecommendations = {
    "Artistik": ["Desain Grafis", "Seni Rupa", "Musik", "Film dan Televisi"],
    "Ilmiah": ["Kedokteran", "Farmasi", "Biologi", "Kimia"],
    "Sosial": ["Psikologi", "Sosiologi", "Pendidikan", "Hubungan Internasional"],
    "Teknis": ["Teknik Informatika", "Teknik Mesin", "Teknik Elektro", "Arsitektur"],
    "Bisnis": ["Manajemen", "Akuntansi", "Ekonomi", "Marketing"],
    "Konvensional": ["Administrasi", "Perpustakaan", "Sekretaris", "Keuangan"]
  };

  return {
    softSkills,
    hardSkills,
    interests,
    recommendedMajors: majorRecommendations[topInterestCategory] || [],
    topInterestCategory
  };
};

export default Test;
