
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TestAnswer } from "@/pages/Test";

interface TestQuestionsProps {
  onComplete: (answers: TestAnswer[]) => void;
}

const questions = [
  {
    id: 1,
    text: "Saya senang berbicara di depan banyak orang",
    category: "komunikasi"
  },
  {
    id: 2,
    text: "Saya mudah memahami perasaan orang lain",
    category: "komunikasi"
  },
  {
    id: 3,
    text: "Saya suka menjelaskan hal-hal kompleks dengan sederhana",
    category: "komunikasi"
  },
  {
    id: 4,
    text: "Saya nyaman memimpin diskusi kelompok",
    category: "komunikasi"
  },
  {
    id: 5,
    text: "Saya senang berinteraksi dengan orang baru",
    category: "komunikasi"
  },
  {
    id: 6,
    text: "Saya sering mengambil inisiatif dalam proyek kelompok",
    category: "kepemimpinan"
  },
  {
    id: 7,
    text: "Orang lain sering meminta pendapat saya",
    category: "kepemimpinan"
  },
  {
    id: 8,
    text: "Saya bisa membuat keputusan dengan cepat",
    category: "kepemimpinan"
  },
  {
    id: 9,
    text: "Saya senang mengorganisir acara atau kegiatan",
    category: "kepemimpinan"
  },
  {
    id: 10,
    text: "Saya bisa memotivasi orang lain",
    category: "kepemimpinan"
  },
  {
    id: 11,
    text: "Saya senang menggambar atau melukis",
    category: "artistik"
  },
  {
    id: 12,
    text: "Saya tertarik dengan desain dan estetika",
    category: "artistik"
  },
  {
    id: 13,
    text: "Saya senang bermain musik atau bernyanyi",
    category: "artistik"
  },
  {
    id: 14,
    text: "Saya suka membuat sesuatu dengan tangan",
    category: "artistik"
  },
  {
    id: 15,
    text: "Saya senang mengekspresikan ide kreatif",
    category: "artistik"
  },
  {
    id: 16,
    text: "Saya senang melakukan eksperimen",
    category: "ilmiah"
  },
  {
    id: 17,
    text: "Saya tertarik pada bagaimana sesuatu bekerja",
    category: "ilmiah"
  },
  {
    id: 18,
    text: "Saya senang menganalisis data dan angka",
    category: "ilmiah"
  },
  {
    id: 19,
    text: "Saya tertarik pada penelitian ilmiah",
    category: "ilmiah"
  },
  {
    id: 20,
    text: "Saya senang memecahkan masalah yang rumit",
    category: "ilmiah"
  },
  {
    id: 21,
    text: "Saya senang bekerja dengan teknologi",
    category: "teknis"
  },
  {
    id: 22,
    text: "Saya tertarik pada programming atau coding",
    category: "teknis"
  },
  {
    id: 23,
    text: "Saya senang merakit atau memperbaiki barang",
    category: "teknis"
  },
  {
    id: 24,
    text: "Saya tertarik pada cara kerja mesin",
    category: "teknis"
  },
  {
    id: 25,
    text: "Saya senang belajar software baru",
    category: "teknis"
  },
  {
    id: 26,
    text: "Saya senang membantu orang lain",
    category: "sosial"
  },
  {
    id: 27,
    text: "Saya tertarik pada isu-isu sosial",
    category: "sosial"
  },
  {
    id: 28,
    text: "Saya senang bekerja dalam tim",
    category: "sosial"
  },
  {
    id: 29,
    text: "Saya peduli dengan kesejahteraan orang lain",
    category: "sosial"
  },
  {
    id: 30,
    text: "Saya senang mengajar atau berbagi pengetahuan",
    category: "sosial"
  }
];

export const TestQuestions = ({ onComplete }: TestQuestionsProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<TestAnswer[]>([]);

  const handleAnswer = (score: number) => {
    const newAnswer: TestAnswer = {
      questionId: questions[currentQuestion].id,
      answer: score
    };

    const updatedAnswers = [...answers.filter(a => a.questionId !== questions[currentQuestion].id), newAnswer];
    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(updatedAnswers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentAnswer = answers.find(a => a.questionId === questions[currentQuestion].id);

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Pertanyaan {currentQuestion + 1} dari {questions.length}
            </h2>
            <span className="text-purple-600 font-semibold">
              {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>

        <Card className="bg-white/90 backdrop-blur-sm border-2 border-purple-200 mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800 text-center">
              {questions[currentQuestion].text}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-center text-gray-600 mb-6">
                Seberapa setuju kamu dengan pernyataan di atas?
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                {[
                  { value: 1, label: "Sangat Tidak Setuju", color: "from-red-400 to-red-500" },
                  { value: 2, label: "Tidak Setuju", color: "from-orange-400 to-orange-500" },
                  { value: 3, label: "Netral", color: "from-yellow-400 to-yellow-500" },
                  { value: 4, label: "Setuju", color: "from-green-400 to-green-500" },
                  { value: 5, label: "Sangat Setuju", color: "from-purple-400 to-purple-500" }
                ].map((option) => (
                  <Button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    variant={currentAnswer?.answer === option.value ? "default" : "outline"}
                    className={`p-4 h-auto text-left justify-start ${
                      currentAnswer?.answer === option.value 
                        ? `bg-gradient-to-r ${option.color} text-white border-transparent` 
                        : "hover:bg-purple-50 border-purple-200"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        currentAnswer?.answer === option.value 
                          ? "bg-white border-white" 
                          : "border-purple-300"
                      }`} />
                      <span className="text-base">{option.label}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            variant="outline"
            className="border-purple-200 text-purple-600"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Sebelumnya
          </Button>

          {currentAnswer && currentQuestion === questions.length - 1 && (
            <Button
              onClick={() => onComplete(answers)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              Lihat Hasil
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
