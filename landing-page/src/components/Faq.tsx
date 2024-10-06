import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question,  answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-700">
      <button
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-left font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-slate-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-slate-400" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 text-slate-300 bg-slate-700/25">
          {answer}
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
      question: "Jak mogę się z Wami skontaktować?",
      answer: "Możesz się z nami skontaktować poprzez formularz kontaktowy, email lub telefon."
    },
    {
      question: "O co chodzi w tych całych egzoplanetach?",
      answer: "są to planety, które znajdują się poza Układem Słonecznym i krążą wokół innych gwiazd."
    },
    {
      question: "Czy oferujecie wsparcie techniczne?",
      answer: "Tak, oferujemy pełne wsparcie techniczne dla naszych Użtknowników 24/7."
    },
    {
      question: "Dlaczego Powinienem Korzystać akurat z ExoSearch?",
      answer: "Ponieważ jesteśmy jedyną pratformą edukacyjną która uczy o egzoplanetach i za punkty exp możecie zdobywać nagrody w postaci rang i przywileji na stronie które w przysłości przełożą się na dodatki na wysokich uczelniach wspieranych przez Nasa!"

    }
    
  ];

  return (
    <div className="bg-slate-800 min-h-screen text-white">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-2">Często zadawane pytania</h1>
        <p className="text-slate-400 mb-8">Znajdź odpowiedzi na najczęściej zadawane pytania</p>
        
        <div className="space-y-1 rounded-lg bg-slate-900/50 overflow-hidden">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;