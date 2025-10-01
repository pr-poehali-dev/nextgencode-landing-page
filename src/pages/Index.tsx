import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const courses = [
    {
      icon: "Sparkles",
      title: "Scratch Junior",
      age: "6-8 лет",
      description: "Создание первых игр и анимаций в визуальной среде программирования",
      duration: "3 месяца",
      level: "Начальный"
    },
    {
      icon: "Code2",
      title: "Python для детей",
      age: "9-12 лет",
      description: "Основы программирования на Python через создание игр и проектов",
      duration: "6 месяцев",
      level: "Базовый"
    },
    {
      icon: "Laptop",
      title: "Web-разработка",
      age: "12-16 лет",
      description: "Создание сайтов и веб-приложений с HTML, CSS и JavaScript",
      duration: "8 месяцев",
      level: "Продвинутый"
    }
  ];

  const features = [
    {
      icon: "Rocket",
      title: "Интерактивные уроки",
      description: "Обучение через практику и создание реальных проектов"
    },
    {
      icon: "Users",
      title: "Малые группы",
      description: "До 8 учеников в группе для персонального подхода"
    },
    {
      icon: "Trophy",
      title: "Сертификаты",
      description: "Получение официального сертификата после окончания курса"
    },
    {
      icon: "Bot",
      title: "AI-помощник",
      description: "Умный ассистент помогает решать задачи 24/7"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-tech flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold font-poppins">NEXTGENCODE</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors">Курсы</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О школе</a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-gradient-tech text-white hover:opacity-90">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 circuit-pattern opacity-30"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Icon name="Zap" size={16} />
              <span>Онлайн школа программирования</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 leading-tight">
              Учим детей <span className="text-gradient">создавать будущее</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Современные IT-курсы для детей от 6 до 16 лет. Программирование, веб-разработка и создание игр в интерактивном формате
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-tech text-white hover:opacity-90 text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Начать обучение
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Calendar" size={20} className="mr-2" />
                Бесплатный урок
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-border/40">
              <div>
                <div className="text-3xl font-bold text-gradient font-poppins mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Учеников</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient font-poppins mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Курсов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient font-poppins mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Довольных</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      </section>

      <section id="courses" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <Icon name="BookOpen" size={16} />
              <span>Образовательные программы</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Наши курсы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Программы разработаны с учетом возраста и подготовки ребенка
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-tech flex items-center justify-center mb-4 group-hover:animate-float">
                  <Icon name={course.icon as any} className="text-white" size={28} />
                </div>
                
                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-3">
                  {course.age}
                </div>
                
                <h3 className="text-2xl font-bold font-poppins mb-3 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Signal" size={16} />
                    <span>{course.level}</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-tech text-white hover:opacity-90 group-hover:shadow-lg">
                  Подробнее
                  <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Почему NEXTGENCODE?</h2>
            <p className="text-lg text-muted-foreground">
              Современный подход к обучению программированию
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-tech flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon as any} className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold font-poppins mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Card className="max-w-4xl mx-auto p-12 text-center bg-gradient-tech border-0">
            <Icon name="Sparkles" className="text-white mx-auto mb-6" size={48} />
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6">
              Готовы начать путь в IT?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Запишитесь на бесплатный пробный урок и откройте для ребенка мир программирования
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Записаться на пробный урок
            </Button>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border/40 py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-tech flex items-center justify-center">
                  <Icon name="GraduationCap" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold font-poppins">NEXTGENCODE</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Онлайн школа программирования для детей
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Курсы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Scratch Junior</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Python</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Web-разработка</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Школа</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@nextgencode.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 NEXTGENCODE. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
