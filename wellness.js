document.addEventListener('DOMContentLoaded', () => {
    class WellnessLanding {
        constructor() {
            this.initEventListeners();
        }

        initEventListeners() {
            const ctaButtons = document.querySelectorAll('.cta-button');
            ctaButtons.forEach(button => {
                button.addEventListener('click', this.handleBooking);
            });
        }

        handleBooking(event) {
            event.preventDefault();
            // Logica prenotazione corso
            console.log('Prenotazione corso avviata');
        }

        static initAnalytics() {
            // Integrazione tracking
        }
    }

    new WellnessLanding();
    WellnessLanding.initAnalytics();
});