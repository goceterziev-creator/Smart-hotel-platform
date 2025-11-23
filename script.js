// NEURAL HOTEL BOOKING SYSTEM
class NeuralHotelSystem {
    constructor() {
        this.roomPrices = {
            standard: 80,
            deluxe: 120,
            suite: 200
        };
        this.taxRate = 18;
        this.init();
    }

    init() {
        this.bindEvents();
        this.updatePrices();
    }

    bindEvents() {
        // Room selection change
        document.getElementById('roomType').addEventListener('change', () => {
            this.updatePrices();
            this.getAIRecommendation();
        });

        // Date changes
        document.getElementById('checkIn').addEventListener('change', () => {
            this.updatePrices();
            this.getAIRecommendation();
        });

        document.getElementById('checkOut').addEventListener('change', () => {
            this.updatePrices();
            this.getAIRecommendation();
        });

        // Guests change
        document.getElementById('guests').addEventListener('change', () => {
            this.updatePrices();
            this.getAIRecommendation();
        });

        // Book button
        document.getElementById('bookBtn').addEventListener('click', () => {
            this.handleBooking();
        });

        // AI Assistant
        document.getElementById('askPetya').addEventListener('click', () => {
            this.askPetyaAssistant();
        });
    }

    updatePrices() {
        const roomType = document.getElementById('roomType').value;
        const roomPrice = this.roomPrices[roomType];
        const guests = parseInt(document.getElementById('guests').value) || 2;
        
        // Calculate nights (simplified)
        const nights = 1; // In real app, calculate from dates
        
        const totalBeforeTax = roomPrice * nights;
        const taxAmount = (totalBeforeTax * this.taxRate) / 100;
        const totalPrice = totalBeforeTax + taxAmount;

        // Update UI
        document.getElementById('roomPrice').textContent = `$${totalBeforeTax}`;
        document.getElementById('taxAmount').textContent = `$${taxAmount.toFixed(2)}`;
        document.getElementById('totalPrice').textContent = `$${totalPrice.toFixed(2)}`;
    }

    getAIRecommendation() {
        const roomType = document.getElementById('roomType').value;
        const guests = parseInt(document.getElementById('guests').value) || 2;
        
        let recommendation = "";
        
        switch(roomType) {
            case 'standard':
                recommendation = "🎯 Стандартната стая е перфектна за кратки бизнес пътувания или solo пътници.";
                break;
            case 'deluxe':
                recommendation = "💫 Делукс стаята предлага допълнително пространство и луксозни услуги - идеална за двойки.";
                break;
            case 'suite':
                recommendation = "👑 Луксозният апартамент е перфектен за семейства или специални поводи. Включва complimentary услуги!";
                break;
        }

        if (guests > 2) {
            recommendation += " Препоръчвам стая с допълнително легло или свързани стаи.";
        }

        document.getElementById('aiSuggestion').textContent = recommendation;
    }

    handleBooking() {
        const roomType = document.getElementById('roomType').value;
        const totalPrice = document.getElementById('totalPrice').textContent;
        
        // Integrate with payment system
        if (window.NeuralPaymentSystem) {
            window.NeuralPaymentSystem.processBooking({
                roomType: roomType,
                totalPrice: totalPrice,
                guests: document.getElementById('guests').value
            });
        } else {
            alert(`✅ Резервацията е успешна! Обща сума: ${totalPrice}\nЩе се свържем с вас за потвърждение.`);
        }
    }

    askPetyaAssistant() {
        const questions = [
            "🎯 Коя стая препоръчвате за романтична почивка?",
            "💼 Имате ли стаи, подходящи за бизнес срещи?",
            "👪 Кои стаи са най-добри за семейства с деца?",
            "🌅 Кои стаи имат най-добър изглед?",
            "💸 Имате ли специални оферти за дългосрочен престой?"
        ];
        
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        alert(`🧠 ПЕТЯ: ${randomQuestion}\n\nОтговорът ще бъде включен в следващата версия!`);
    }
}

// Initialize system when page loads
document.addEventListener('DOMContentLoaded', () => {
    new NeuralHotelSystem();
});
