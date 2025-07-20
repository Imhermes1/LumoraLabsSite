// Lumora Labs Website JavaScript

class LumoraWebsite {
    constructor() {
        this.betaCounters = {
            moodo: 20,
            coretrack: 20
        };
        this.maxBetaSignups = 50;
        
        this.init();
    }

    init() {
        this.setupSmoothScrolling();
        this.setupBetaCounters();
        this.setupScrollAnimations();
        this.setupInteractiveElements();
        this.startCounterUpdates();
    }

    // Smooth scrolling for navigation links
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const navHeight = document.querySelector('.nav').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Setup beta counter functionality
    setupBetaCounters() {
        this.updateAllCounters();
        
        // Add click tracking for beta signup links
        document.querySelectorAll('a[href*="notion.site"]').forEach(link => {
            link.addEventListener('click', () => {
                this.trackBetaClick();
            });
        });
    }

    // Update all counter displays
    updateAllCounters() {
        // Update MooDo counters
        document.querySelectorAll('#moodo-counter, #moodo-beta-counter').forEach(counter => {
            counter.textContent = this.betaCounters.moodo;
        });

        // Update CoreTrack counters
        document.querySelectorAll('#coretrack-counter, #coretrack-beta-counter').forEach(counter => {
            counter.textContent = this.betaCounters.coretrack;
        });

        // Update remaining spots
        document.getElementById('moodo-remaining').textContent = this.maxBetaSignups - this.betaCounters.moodo;
        document.getElementById('coretrack-remaining').textContent = this.maxBetaSignups - this.betaCounters.coretrack;

        // Update progress bars
        this.updateProgressBars();
    }

    // Update progress bar widths
    updateProgressBars() {
        const moodorprogress = (this.betaCounters.moodo / this.maxBetaSignups) * 100;
        const coretrackProgress = (this.betaCounters.coretrack / this.maxBetaSignups) * 100;

        document.querySelectorAll('.moodo-progress').forEach(bar => {
            bar.style.width = `${moodorprogress}%`;
        });

        document.querySelectorAll('.coretrack-progress').forEach(bar => {
            bar.style.width = `${coretrackProgress}%`;
        });
    }

    // Simulate beta signups over time
    startCounterUpdates() {
        // Randomly increment counters every 30-60 seconds
        const updateInterval = () => {
            const delay = Math.random() * 30000 + 30000; // 30-60 seconds
            
            setTimeout(() => {
                this.simulateBetaSignup();
                updateInterval();
            }, delay);
        };

        updateInterval();
    }

    // Simulate a beta signup
    simulateBetaSignup() {
        // Don't update if both apps are at max capacity
        if (this.betaCounters.moodo >= this.maxBetaSignups && this.betaCounters.coretrack >= this.maxBetaSignups) {
            return;
        }

        // Randomly choose which app gets a new signup
        const apps = [];
        if (this.betaCounters.moodo < this.maxBetaSignups) apps.push('moodo');
        if (this.betaCounters.coretrack < this.maxBetaSignups) apps.push('coretrack');

        if (apps.length > 0) {
            const selectedApp = apps[Math.floor(Math.random() * apps.length)];
            this.betaCounters[selectedApp]++;
            
            // Animate the counter update
            this.animateCounterUpdate(selectedApp);
            this.updateAllCounters();
        }
    }

    // Animate counter updates
    animateCounterUpdate(app) {
        const selectors = app === 'moodo' 
            ? ['#moodo-counter', '#moodo-beta-counter']
            : ['#coretrack-counter', '#coretrack-beta-counter'];

        selectors.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                element.style.transform = 'scale(1.2)';
                element.style.color = app === 'moodo' ? '#FA73A6' : '#38B06A';
                
                setTimeout(() => {
                    element.style.transform = 'scale(1)';
                    element.style.color = '';
                }, 300);
            }
        });
    }

    // Track beta signup clicks
    trackBetaClick() {
        // Simulate immediate counter update when user clicks
        if (Math.random() > 0.7) { // 30% chance of immediate update
            setTimeout(() => {
                this.simulateBetaSignup();
            }, 2000);
        }
    }

    // Setup scroll animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.glass-panel, .feature-card, .tech-card, .app-showcase').forEach(el => {
            el.classList.add('animate-target');
            observer.observe(el);
        });
    }

    // Setup interactive elements
    setupInteractiveElements() {
        // Mood selector interaction in app mockup
        document.querySelectorAll('.mood-option').forEach(option => {
            option.addEventListener('click', () => {
                document.querySelectorAll('.mood-option').forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                
                // Update task list based on selected mood
                this.updateMoodTasks(option.dataset.mood);
            });
        });

        // Parallax effect for hero background
        this.setupParallaxEffect();
        
        // Interactive particles
        this.setupParticleAnimation();
    }

    // Update task list based on mood selection
    updateMoodTasks(mood) {
        const taskList = document.querySelector('.task-list');
        if (!taskList) return;

        const moodTasks = {
            positive: [
                { emoji: '📱', text: 'Call mom', mood: 'positive' },
                { emoji: '✉️', text: 'Send thank you email', mood: 'positive' },
                { emoji: '🎉', text: 'Plan team celebration', mood: 'positive' }
            ],
            calm: [
                { emoji: '📚', text: 'Read industry report', mood: 'calm' },
                { emoji: '📋', text: 'Organize project files', mood: 'calm' },
                { emoji: '📊', text: 'Review analytics', mood: 'calm' }
            ],
            focused: [
                { emoji: '💻', text: 'Code new feature', mood: 'focused' },
                { emoji: '📝', text: 'Write documentation', mood: 'focused' },
                { emoji: '🔧', text: 'Fix critical bug', mood: 'focused' }
            ],
            creative: [
                { emoji: '🎨', text: 'Design mockup', mood: 'creative' },
                { emoji: '💡', text: 'Brainstorm ideas', mood: 'creative' },
                { emoji: '🖼️', text: 'Create presentation', mood: 'creative' }
            ],
            stressed: [
                { emoji: '🚨', text: 'Handle urgent issue', mood: 'stressed' },
                { emoji: '📞', text: 'Client emergency call', mood: 'stressed' },
                { emoji: '🔥', text: 'Fix production bug', mood: 'stressed' }
            ]
        };

        const tasks = moodTasks[mood] || moodTasks.positive;
        
        // Animate task list update
        taskList.style.opacity = '0.5';
        
        setTimeout(() => {
            taskList.innerHTML = tasks.map(task => `
                <div class="task-item">
                    <span class="task-emoji">${task.emoji}</span>
                    <span>${task.text}</span>
                    <span class="task-mood ${task.mood}">${task.mood.charAt(0).toUpperCase() + task.mood.slice(1)}</span>
                </div>
            `).join('');
            
            taskList.style.opacity = '1';
        }, 150);
    }

    // Setup parallax effect
    setupParallaxEffect() {
        const hero = document.querySelector('.hero');
        const heroBackground = document.querySelector('.hero__background');
        
        if (!hero || !heroBackground) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (scrolled < hero.offsetHeight) {
                heroBackground.style.transform = `translateY(${rate}px)`;
            }
        });
    }

    // Setup particle animation
    setupParticleAnimation() {
        const createParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: radial-gradient(circle, rgba(250, 115, 166, 0.6), transparent);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1;
                left: ${Math.random() * 100}vw;
                top: 100vh;
                animation: floatUp ${8 + Math.random() * 4}s linear forwards;
            `;
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 12000);
        };

        // Create particles periodically
        setInterval(createParticle, 3000);
    }
}

// CSS animations for scroll effects
const addScrollAnimationStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        .animate-target {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-target.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        @keyframes floatUp {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        .particle {
            animation: floatUp 10s linear forwards;
        }
        
        /* Enhanced hover effects */
        .feature-card:hover {
            box-shadow: 0 8px 32px rgba(250, 115, 166, 0.2);
        }
        
        .tech-card:hover {
            box-shadow: 0 8px 32px rgba(56, 176, 106, 0.2);
        }
        
        .app-beta-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
        }
        
        /* Button pulse animation */
        .btn--primary {
            position: relative;
            overflow: hidden;
        }
        
        .btn--primary::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
        }
        
        .btn--primary:hover::before {
            left: 100%;
        }
    `;
    document.head.appendChild(style);
};

// Navigation transparency on scroll
const setupNavTransparency = () => {
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const transparency = Math.min(scrolled / 100, 1);
        
        nav.style.backgroundColor = `rgba(255, 255, 255, ${0.05 + transparency * 0.1})`;
        nav.style.backdropFilter = `blur(${20 + transparency * 10}px)`;
    });
};

// Enhanced app mockup interactions
const setupMockupInteractions = () => {
    // Voice wave animation for CoreTrack
    const voiceWave = document.querySelector('.voice-wave');
    if (voiceWave) {
        setInterval(() => {
            voiceWave.style.transform = `scale(${1 + Math.random() * 0.2})`;
            setTimeout(() => {
                voiceWave.style.transform = 'scale(1)';
            }, 200);
        }, 1500);
    }
    
    // Nutrition stats animation
    const nutritionStats = document.querySelectorAll('.nutrition-stats .stat');
    nutritionStats.forEach((stat, index) => {
        setTimeout(() => {
            stat.style.animation = `pulse 2s ease-in-out infinite`;
            stat.style.animationDelay = `${index * 0.2}s`;
        }, 1000);
    });
};

// Performance optimization
const optimizePerformance = () => {
    // Lazy load animations
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (reduceMotion) {
        // Disable animations for users who prefer reduced motion
        document.documentElement.style.setProperty('--duration-fast', '0ms');
        document.documentElement.style.setProperty('--duration-normal', '0ms');
    }
    
    // Throttle scroll events
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    
    window.addEventListener('scroll', () => {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                scrollTimeout = null;
            }, 16); // ~60fps
        }
    });
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add scroll animation styles
    addScrollAnimationStyles();
    
    // Initialize main website functionality
    new LumoraWebsite();
    
    // Setup additional features
    setupNavTransparency();
    setupMockupInteractions();
    optimizePerformance();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);
});

// Handle window resize
window.addEventListener('resize', () => {
    // Recalculate animations and layouts if needed
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.minHeight = window.innerHeight + 'px';
    }
});

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LumoraWebsite };
}