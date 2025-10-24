import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">МРАЗЬ</h1>
            <div className="flex gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className={`transition-colors hover:text-primary ${
                  activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`transition-colors hover:text-primary ${
                  activeSection === 'about' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Обо мне
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`transition-colors hover:text-primary ${
                  activeSection === 'contact' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-6xl font-bold leading-tight">
                Привет! Я <span className="text-primary">МРАЗЬ</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Добро пожаловать на мой личный сайт
              </p>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => scrollToSection('about')}
              >
                Узнать больше
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                <img
                  src="https://cdn.poehali.dev/files/49a0adba-3d56-4501-974e-46b8c377ead8.png"
                  alt="Photo 1"
                  className="w-full h-64 object-cover"
                />
              </Card>
              <Card className="overflow-hidden group cursor-pointer transition-transform hover:scale-105 mt-8">
                <img
                  src="https://cdn.poehali.dev/files/a546be33-cc2a-4f24-bf96-0c6ed6f3c73f.png"
                  alt="Photo 2"
                  className="w-full h-64 object-cover"
                />
              </Card>
              <Card className="overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                <img
                  src="https://cdn.poehali.dev/files/5320cf94-146d-4571-ac30-06b2e0819db6.png"
                  alt="Photo 3"
                  className="w-full h-64 object-cover"
                />
              </Card>
              <Card className="overflow-hidden group cursor-pointer transition-transform hover:scale-105 mt-8">
                <img
                  src="https://cdn.poehali.dev/files/40218c65-eb30-4591-959d-c379d1b8d2238.png"
                  alt="Photo 4"
                  className="w-full h-64 object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center animate-fade-in">
              Обо <span className="text-primary">мне</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-8 bg-card border-border hover:border-primary transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="CheckCircle" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Честность</h3>
                <p className="text-muted-foreground">
                  Я мразь и это не отрицаю
                </p>
              </Card>
              <Card className="p-8 bg-card border-border hover:border-primary transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Коммуникабельность</h3>
                <p className="text-muted-foreground">
                  Я лижу задницы всем
                </p>
              </Card>
              <Card className="p-8 bg-card border-border hover:border-primary transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Smile" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Мимика</h3>
                <p className="text-muted-foreground">
                  Я мимика
                </p>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Привет! Я МРАЗЬ. Здесь я делюсь своими мыслями, фотографиями и моментами из жизни.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center animate-fade-in">
              <span className="text-primary">Контакты</span>
            </h2>
            <Card className="p-8 bg-card border-border">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    placeholder="Напишите что-нибудь..."
                    rows={5}
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Отправить
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex justify-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-border hover:border-primary hover:bg-primary/10"
                  >
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-border hover:border-primary hover:bg-primary/10"
                  >
                    <Icon name="Mail" size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-border hover:border-primary hover:bg-primary/10"
                  >
                    <Icon name="MessageCircle" size={20} />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2024 МРАЗЬ. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;