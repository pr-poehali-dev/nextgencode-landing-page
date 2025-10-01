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
      <nav className="border-b border-primary/30 backdrop-blur-sm bg-background/90 sticky top-0 z-50 neon-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-tech flex items-center justify-center animate-pulse-glow">
                <Icon name="GraduationCap" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold font-poppins text-gradient">NEXTGENCODE</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors">Курсы</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О школе</a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-gradient-tech text-white hover:opacity-90 neon-glow hover:scale-105 transition-all">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 circuit-pattern opacity-30"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/40 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/40 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '0.5s'}}></div>
        
        <div className="absolute top-32 left-1/4 w-12 h-12 border-2 border-primary neon-border rounded-lg animate-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-48 right-1/3 w-8 h-8 border-2 border-accent neon-border rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 right-1/4 w-10 h-10 border-2 border-secondary neon-border rotate-45 animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-40 left-1/3 text-4xl text-primary opacity-60 animate-float" style={{animationDelay: '1.5s', textShadow: '0 0 20px rgba(168, 85, 247, 0.8)'}}>{'</>'}</div>
        <div className="absolute bottom-40 right-1/3 text-3xl text-accent opacity-60 animate-float" style={{animationDelay: '2s', textShadow: '0 0 20px rgba(236, 72, 153, 0.8)'}}>{'{ }'}</div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 neon-border backdrop-blur-sm">
              <Icon name="Zap" size={16} className="animate-pulse" />
              <span>Онлайн школа программирования</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 leading-tight">
              Учим детей <span className="text-gradient glow-text">создавать будущее</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Современные IT-курсы для детей от 6 до 16 лет. Программирование, веб-разработка и создание игр в интерактивном формате
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-tech text-white hover:opacity-90 text-lg px-8 neon-glow hover:scale-105 transition-all">
                <Icon name="Play" size={20} className="mr-2" />
                Начать обучение
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-primary hover:bg-primary/20 neon-border backdrop-blur-sm hover:scale-105 transition-all">
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

      <section id="courses" className="py-24 relative bg-gradient-to-b from-background to-muted/20">
        <div className="absolute inset-0 circuit-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
              Выбери свой <span className="text-gradient glow-text">путь в IT</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждый курс — это увлекательное приключение в мир технологий
            </p>
          </div>

          <div className="max-w-7xl mx-auto space-y-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute -inset-1 bg-gradient-tech rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 neon-glow"></div>
                <div className="relative bg-card border-2 border-border hover:border-primary rounded-2xl p-8 md:p-10 transition-all duration-300 hover:shadow-2xl hover:neon-border backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-tech flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon name={course.icon as any} className="text-white" size={40} />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="text-3xl md:text-4xl font-bold font-poppins group-hover:text-gradient transition-colors">
                          {course.title}
                        </h3>
                        <span className="px-4 py-1.5 rounded-full bg-gradient-tech text-white text-sm font-semibold">
                          {course.age}
                        </span>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-3xl">
                        {course.description}
                      </p>

                      <div className="flex flex-wrap gap-6 mb-6">
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon name="Clock" size={18} className="text-primary" />
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">Длительность</div>
                            <div className="font-semibold">{course.duration}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                            <Icon name="Signal" size={18} className="text-accent" />
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">Уровень</div>
                            <div className="font-semibold">{course.level}</div>
                          </div>
                        </div>
                      </div>

                      <Button size="lg" className="bg-gradient-tech text-white hover:opacity-90 hover:scale-105 transition-all neon-glow">
                        Узнать больше
                        <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/10 relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-20"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Почему <span className="text-gradient">NEXTGENCODE</span>?</h2>
            <p className="text-lg text-muted-foreground">
              Современный подход к обучению программированию
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2 border-border hover:border-primary hover:neon-border backdrop-blur-sm bg-card/80"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-tech flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
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
        <div className="absolute inset-0 circuit-pattern opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Card className="max-w-4xl mx-auto p-12 text-center bg-gradient-tech border-0 neon-glow">
            <Icon name="Sparkles" className="text-white mx-auto mb-6 animate-pulse" size={48} />
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6 glow-text">
              Готовы начать путь в IT?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Запишитесь на бесплатный пробный урок и откройте для ребенка мир программирования
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 hover:scale-110 transition-all shadow-2xl">
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