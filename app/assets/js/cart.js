/* ==========================================================================
   FAUSAN HAUTE COUTURE — SHARED CART & COMMERCE ENGINE
   ========================================================================== */

const FAUSAN_CATALOG = {
    'eclipse': {
        id: 'eclipse',
        name: 'THE ECLIPSE GOWN',
        subtitle: 'Bespoke Atelier Commission — Limited to 12 Pieces',
        price: 185000,
        formattedPrice: '₹ 185,000',
        material: '100% Organic Lyon Mulberry Silk Crepe (42 Momme) & 24K Gold Wire',
        atelier: 'Handcrafted in Paris Atelier (180 Hours of Hand Stitching)',
        edition: 'Numbered Atelier Archive (Piece 04 of 12)',
        images: [
            'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80'
        ],
        description: 'An architectural evening gown sculpted from heavy 42-momme Lyon silk crepe. Featuring concealed internal corsetry, bias-cut cascading godets, and hand-finished 24-karat spun gold filament tracing the collarbone and trailing hemline.'
    },
    'solar': {
        id: 'solar',
        name: 'SOLAR SILHOUETTE GOWN',
        subtitle: 'Runway Défilé 2026 — Limited to 08 Pieces',
        price: 210000,
        formattedPrice: '₹ 210,000',
        material: 'Liquid Metallic Lamé Silk & Semi-Sheer Silk Chiffon',
        atelier: 'Handcrafted in Paris Atelier (220 Hours of Hand Draping)',
        edition: 'Numbered Atelier Archive (Piece 02 of 08)',
        images: [
            'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=80'
        ],
        description: 'Engineered with radiant gold metallic weaving that catches and scatters ambient illumination with every stride. Features an asymmetric draped cape neckline and an elongated French train.'
    },
    'obsidian': {
        id: 'obsidian',
        name: 'OBSIDIAN DRAPE GOWN',
        subtitle: 'Nocturne Collection — Limited to 15 Pieces',
        price: 165000,
        formattedPrice: '₹ 165,000',
        material: 'Obsidian Matte Silk Crepe de Chine & Satin Lining',
        atelier: 'Handcrafted in Paris Atelier (150 Hours of Precision Tailoring)',
        edition: 'Numbered Atelier Archive (Piece 07 of 15)',
        images: [
            'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=80'
        ],
        description: 'A tribute to Parisian midnight. A fluid bias drape with handcrafted darts that accentuate the natural contour while providing unrestricted rotational grace and weightless movement.'
    },
    'nocturne': {
        id: 'nocturne',
        name: 'NOCTURNE VELVET GOWN',
        subtitle: 'Winter Gala Collection — Limited to 10 Pieces',
        price: 195000,
        formattedPrice: '₹ 195,000',
        material: 'Plush Silk Velvet & Gold Bullion Filigree Embroidery',
        atelier: 'Handcrafted in Paris Atelier (195 Hours of Goldwork Embroidery)',
        edition: 'Numbered Atelier Archive (Piece 03 of 10)',
        images: [
            'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80'
        ],
        description: 'Sumptuous deep midnight silk velvet adorned with French bullion embroidery hand-stitched along the architectural square neckline and flared sleeve cuffs.'
    }
};

const CartStore = {
    getCart() {
        try {
            return JSON.parse(localStorage.getItem('fausan_cart') || '[]');
        } catch (e) {
            return [];
        }
    },
    saveCart(cart) {
        localStorage.setItem('fausan_cart', JSON.stringify(cart));
        this.updateBadge();
    },
    addItem(product, size = 'EU 36', color = 'Obsidian Black', quantity = 1) {
        const cart = this.getCart();
        const existingIdx = cart.findIndex(item => item.id === product.id && item.size === size && item.color === color);
        if (existingIdx > -1) {
            cart[existingIdx].quantity += quantity;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                formattedPrice: product.formattedPrice,
                image: product.images[0],
                size: size,
                color: color,
                quantity: quantity
            });
        }
        this.saveCart(cart);
        this.showToast(`✨ Added "${product.name}" (${size}) to Shopping Bag`);
    },
    removeItem(index) {
        const cart = this.getCart();
        if (index >= 0 && index < cart.length) {
            const removed = cart.splice(index, 1)[0];
            this.saveCart(cart);
            this.showToast(`Removed "${removed.name}" from Bag`);
        }
    },
    updateQuantity(index, newQty) {
        const cart = this.getCart();
        if (index >= 0 && index < cart.length) {
            if (newQty <= 0) {
                this.removeItem(index);
            } else {
                cart[index].quantity = newQty;
                this.saveCart(cart);
            }
        }
    },
    clearCart() {
        localStorage.removeItem('fausan_cart');
        this.updateBadge();
    },
    getSubtotal() {
        const cart = this.getCart();
        return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    getItemCount() {
        const cart = this.getCart();
        return cart.reduce((sum, item) => sum + item.quantity, 0);
    },
    formatCurrency(amount) {
        return '₹ ' + amount.toLocaleString('en-IN');
    },
    updateBadge() {
        const count = this.getItemCount();
        const badges = document.querySelectorAll('.cart-badge-count');
        badges.forEach(badge => {
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        });
    },
    showToast(message) {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            container.className = 'toast-container';
            document.body.appendChild(container);
        }
        const toast = document.createElement('div');
        toast.className = 'toast-msg';
        toast.innerHTML = `<span class="toast-gold-dot"></span><span>${message}</span>`;
        container.appendChild(toast);
        requestAnimationFrame(() => toast.classList.add('show'));
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 400);
        }, 3200);
    }
};

// Auto-initialize cart badge on page load
document.addEventListener('DOMContentLoaded', () => {
    CartStore.updateBadge();
});
