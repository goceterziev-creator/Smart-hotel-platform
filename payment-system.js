// NEURAL PAYMENT SYSTEM INTEGRATION
class NeuralPaymentSystem {
    constructor() {
        this.initialized = false;
        this.init();
    }

    init() {
        console.log("💳 Neural Payment System - Инициализиране...");
        this.setupPaymentListeners();
        this.initialized = true;
    }

    setupPaymentListeners() {
        // Payment method selection
        document.addEventListener('click', (e) => {
            if (e.target.id === 'bookBtn') {
                this.processBooking(this.getBookingData());
            }
        });
    }

    getBookingData() {
        return {
            roomType: document.getElementById('roomType').value,
            roomPrice: document.getElementById('roomPrice').textContent,
            totalPrice: document.getElementById('totalPrice').textContent,
            guests: document.getElementById('guests').value,
            checkIn: document.getElementById('checkIn').value,
            checkOut: document.getElementById('checkOut').value,
            timestamp: new Date().toISOString()
        };
    }

    processBooking(bookingData) {
        console.log("💳 Обработка на резервация:", bookingData);
        
        // Simulate payment processing
        this.showPaymentModal(bookingData);
    }

    showPaymentModal(bookingData) {
        const modalHTML = `
            <div class="payment-modal" style="
                position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                background: rgba(0,0,0,0.8); display: flex; align-items: center; 
                justify-content: center; z-index: 1000;">
                <div style="background: white; padding: 2rem; border-radius: 15px; max-width: 500px; width: 90%;">
                    <h3>🧠 Neural Payment System</h3>
                    <p>Резервация за: <strong>${this.getRoomName(bookingData.roomType)}</strong></p>
                    <p>Гости: <strong>${bookingData.guests}</strong></p>
                    <p style="font-size: 1.5rem; font-weight: bold; color: #667eea; margin: 1rem 0;">
                        Обща сума: ${bookingData.totalPrice}
                    </p>
                    
                    <div style="margin: 1.5rem 0;">
                        <button onclick="window.NeuralPaymentSystem.confirmPayment()" 
                                style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; 
                                       border: none; padding: 1rem 2rem; border-radius: 10px; 
                                       font-size: 1.1rem; cursor: pointer; width: 100%;">
                            ✅ Потвърди Плащането
                        </button>
                    </div>
                    
                    <button onclick="window.NeuralPaymentSystem.closeModal()" 
                            style="background: transparent; color: #666; border: none; 
                                   cursor: pointer; width: 100%;">
                        ❌ Откажи
                    </button>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    getRoomName(roomType) {
        const names = {
            standard: "Стандартна стая",
            deluxe: "Делукс стая", 
            suite: "Луксозен апартамент"
        };
        return names[roomType] || roomType;
    }

    confirmPayment() {
        // Simulate payment processing
        setTimeout(() => {
            this.closeModal();
            this.showSuccessMessage();
        }, 1500);
    }

    closeModal() {
        const modal = document.querySelector('.payment-modal');
        if (modal) {
            modal.remove();
        }
    }

    showSuccessMessage() {
        alert(`🎉 Резервацията е успешна!\n\nБлагодарим ви, че избрахте Neural Hotels!\nЩе получите имейл потвърждение в следващите минути.\n\n🧠 ПЕТЯ ще ви асистира по време на престоя!`);
    }
}

// Initialize payment system
document.addEventListener('DOMContentLoaded', () => {
    window.NeuralPaymentSystem = new NeuralPaymentSystem();
});
