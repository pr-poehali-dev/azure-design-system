import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Как прислать новость в редакцию?",
    answer:
      "Напишите нам на news@gorodlive.ru или воспользуйтесь кнопкой «Прислать новость». Опишите событие, приложите фото или видео — мы проверим информацию и опубликуем самое важное.",
  },
  {
    question: "Как часто выходят новые материалы?",
    answer:
      "Лента обновляется ежедневно. Главные новости города мы публикуем в течение дня, а большие репортажи и интервью — несколько раз в неделю.",
  },
  {
    question: "Можно ли стать автором издания?",
    answer:
      "Да! Мы всегда рады новым голосам. Если вы хотите писать о городе, отправьте нам пример текста и пару слов о себе — редакция свяжется с вами.",
  },
  {
    question: "Проверяете ли вы достоверность новостей?",
    answer:
      "Обязательно. Каждая новость проходит проверку фактов и источников. Мы не публикуем слухи и непроверенную информацию — для нас доверие читателя важнее скорости.",
  },
  {
    question: "Как предложить тему для материала?",
    answer:
      "Расскажите нам о том, что вас волнует в городе, — через почту или форму обратной связи. Многие наши лучшие материалы родились из писем читателей.",
  },
  {
    question: "Можно ли разместить рекламу или анонс?",
    answer:
      "Да, мы открыты для сотрудничества с бизнесом и организаторами событий. Напишите нам, и мы расскажем о форматах размещения и условиях.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}