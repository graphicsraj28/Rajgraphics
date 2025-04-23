document.addEventListener('DOMContentLoaded', function() {
    const leftCardSlot = document.querySelector('.elementor-element[data-id="c95b4e8"]');
    const maxScrollDistance = 100;

    // Add CSS transition for smoothness
    leftCardSlot.style.transition = 'transform 0.3s ease-out';

    window.addEventListener('scroll', function() {
        const scrollPosition = Math.min(window.scrollY, maxScrollDistance);
        leftCardSlot.style.transform = `translateY(${scrollPosition}px) rotate(-10deg)`;
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const dynamicTexts = document.querySelectorAll('.elementor-headline-dynamic-text');
    let currentIndex = 0;

    // Timing controls (adjust these as needed)
    const flipOutDuration = 600; // Time for word to flip out (ms)
    const flipInDuration = 600; // Time for word to flip in (ms)
    const delayBetweenWords = 100; // Gap between animations (ms)
    const displayDuration = 2000; // Time word stays visible (ms)

    // Initialize - set all to inactive except first
    dynamicTexts.forEach((text, index) => {
        text.style.display = 'none';
        text.style.position = 'absolute'; // Fix positioning
        if (index === 0) {
            text.style.display = 'inline-block';
            text.classList.add('elementor-headline-text-active');
        }
    });

    function rotateText() {
        const currentActive = dynamicTexts[currentIndex];
        const nextIndex = (currentIndex + 1) % dynamicTexts.length;
        const nextActive = dynamicTexts[nextIndex];

        // 1. Start flip out animation
        currentActive.classList.remove('elementor-headline-text-active');
        currentActive.classList.add('elementor-headline-text-inactive');

        // 2. After flip out completes, hide it and prepare next word
        setTimeout(() => {
            currentActive.style.display = 'none';
            currentActive.classList.remove('elementor-headline-text-inactive');

            // 3. Show next word and start flip in
            nextActive.style.display = 'inline-block';
            nextActive.classList.add('elementor-headline-text-active');

            currentIndex = nextIndex;

            // 4. Schedule next rotation after display duration
            setTimeout(rotateText, displayDuration);

        }, flipOutDuration + delayBetweenWords);
    }

    // Start first rotation after initial display
    setTimeout(rotateText, displayDuration);
    // Time-Based Access Control System
    (function() {
        // Configuration - Set these values
        const EXPIRATION_DATE = new Date('2099-04-02T23:59:59'); // Set your expiration date/time
        const TIMER_POSITION = 'bottom'; // 'top' or 'bottom'
        const LICENSE_KEY = 'UNPAID'; // Change to 'PAID' after receiving payment

        // Don't modify below this line
        if (LICENSE_KEY === 'PAID') return;

        function createTimerElement() {
            const timer = document.createElement('div');
            timer.id = 'access-timer';
            timer.style.cssText = `
            position: fixed;
            ${TIMER_POSITION}: 0;
            left: 0;
            width: 100%;
            background: transparent;
            color: white;
            text-align: center;
            padding: 10px 0;
            font-family: Arial, sans-serif;
            font-size: 14px;
            z-index: 9999;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
        `;
            document.body.appendChild(timer);
            return timer;
        }

        function updateTimer() {
            const now = new Date();
            const diff = EXPIRATION_DATE - now;

            if (diff <= 0) {
                // Time expired - blank the page
                document.body.innerHTML = `
                <div style="
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background: white;
                    font-family: Arial, sans-serif;
                ">
                    <div style="text-align: center;">
                        <h1 style="color: #333; margin-bottom: 20px;">Website Access Suspended</h1>
                        <p style="color: #666; margin-bottom: 30px;">Please contact the developer to restore access</p>
                        <a href="mailto:you@example.com" style="
                            padding: 10px 20px;
                            background: #2563eb;
                            color: white;
                            text-decoration: none;
                            border-radius: 5px;
                        ">Contact Developer</a>
                    </div>
                </div>
            `;
                return;
            }

            // Calculate remaining time
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            // Update timer display
            const timer = document.getElementById('access-timer') || createTimerElement();
            timer.textContent = `Remaining Access: ${days}d ${hours}h ${minutes}m ${seconds}s`;

            // Update every second
            setTimeout(updateTimer, 1000);
        }

        // Start the timer when page loads
        if (document.readyState === 'complete') {
            updateTimer();
        } else {
            window.addEventListener('load', updateTimer);
        }
    })();

    document.addEventListener('DOMContentLoaded', function() {
        // Initialize all sliders
        const sliders = [
            new Swiper('.casino-slider', {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                navigation: {
                    nextEl: '.casino-slider .swiper-button-next',
                    prevEl: '.casino-slider .swiper-button-prev',
                },
                pagination: {
                    el: '.casino-slider .swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    }
                }
            }),
            new Swiper('.cricket-slider', {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                navigation: {
                    nextEl: '.cricket-slider .swiper-button-next',
                    prevEl: '.cricket-slider .swiper-button-prev',
                },
                pagination: {
                    el: '.cricket-slider .swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    }
                }
            }),
            new Swiper('.promotional-slider', {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                navigation: {
                    nextEl: '.promotional-slider .swiper-button-next',
                    prevEl: '.promotional-slider .swiper-button-prev',
                },
                pagination: {
                    el: '.promotional-slider .swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    }
                }
            })
        ];


    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all sliders with the same configuration
    const sliders = [{
            selector: '.casino-slider',
            pagination: '.casino-slider ~ .swiper-pagination'
        },
        {
            selector: '.cricket-slider',
            pagination: '.cricket-slider ~ .swiper-pagination'
        },
        {
            selector: '.promotional-slider',
            pagination: '.promotional-slider ~ .swiper-pagination'
        },
        {
            selector: '.googleads-slider',
            pagination: '.googleads-slider ~ .swiper-pagination'
        },
        {
            selector: '.logo-slider',
            pagination: '.logo-slider ~ .swiper-pagination'
        },
        {
            selector: '.sticker-slider',
            pagination: '.sticker-slider ~ .swiper-pagination'
        },
        {
            selector: '.festival-slider',
            pagination: '.festival-slider ~ .swiper-pagination'
        }
    ];

    sliders.forEach(slider => {
        new Swiper(slider.selector, {
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: `${slider.selector} .swiper-button-next`,
                prevEl: `${slider.selector} .swiper-button-prev`,
            },
            pagination: {
                el: slider.pagination,
                clickable: true,
            }
        });
    });
});
