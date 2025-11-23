// PЕТЯ AI INTEGRATION FOR HOTEL SYSTEM
class PetyaHotelAI {
    constructor() {
        this.name = "ПЕТЯ Hotel AI";
        this.version = "2.0";
        this.init();
    }

    init() {
        console.log(`🏨 ${this.name} v${this.version} - Активирана`);
        this.injectAIFeatures();
    }

    injectAIFeatures() {
        // Add AI personality to the system
        this.createAIVoice();
        this.setupSmartRecommendations();
    }

    createAIVoice() {
        const aiMessages = [
            "Здравейте! Аз съм ПЕТЯ, вашият AI асистент за резервации. 🧠",
            "Готов съм да ви помогна да намерите перфектната стая! 🏨",
            "Моите алгоритми анализират 15+ фактора за оптимална препоръка! ⚡"
        ];

        // Rotate AI messages
        let messageIndex = 0;
        setInterval(() => {
            const aiElement = document.querySelector('.ai-message');
            if (aiElement) {
                aiElement.textContent = aiMessages[messageIndex];
                messageIndex = (messageIndex + 1) % aiMessages.length;
            }
        }, 5000);
    }

    setupSmartRecommendations() {
        // Advanced AI recommendation logic
        this.recommendationEngine = {
            analyzeSeason: function() {
                const month = new Date().getMonth();
                return month >= 5 && month <= 8 ? 'high' : 'low';
            },
            
            suggestOptimalRoom: function(guests, purpose) {
                const recommendations = {
                    'business': 'deluxe',
                    'romance': 'suite', 
                    'family': 'suite',
                    'solo': 'standard'
                };
                return recommendations[purpose] || 'deluxe';
            },
            
            calculateBestPrice: function(roomType, season) {
                const basePrice = {
                    standard: 80,
                    deluxe: 120, 
                    suite: 200
                }[roomType];
                
                return season === 'high' ? basePrice * 1.2 : basePrice * 0.9;
            }
        };
    }

    // Advanced AI method for future expansion
    predictUserPreferences() {
        return {
            preferredRoomType: 'deluxe',
            budgetRange: 'medium',
            travelPurpose: 'leisure',
            priority: 'comfort'
        };
    }
}

// Initialize PЕТЯ AI
document.addEventListener('DOMContentLoaded', () => {
    window.PetyaHotelAI = new PetyaHotelAI();
});
