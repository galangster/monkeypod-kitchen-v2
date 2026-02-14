import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export const locations = [
  {
    id: 'wailea',
    name: 'Wailea',
    island: 'Maui',
    address: '10 Wailea Gateway Place, Kihei, HI 96753',
    phone: '(808) 874-8000',
    hours: {
      lunch: '11:00 AM - 4:00 PM',
      dinner: '4:00 PM - 10:00 PM',
    },
    image: '/images/locations/wailea.jpg',
    features: ['Ocean View', 'Live Music', 'Full Bar'],
  },
  {
    id: 'ko-olina',
    name: 'Ko Olina',
    island: 'Oahu',
    address: '92-1048 Olani St, Kapolei, HI 96707',
    phone: '(808) 380-4086',
    hours: {
      lunch: '11:00 AM - 4:00 PM',
      dinner: '4:00 PM - 10:00 PM',
    },
    image: '/images/locations/ko-olina.jpg',
    features: ['Resort-Side', 'Family Friendly', 'Sunset Views'],
  },
  {
    id: 'waikiki',
    name: 'Waikiki',
    island: 'Oahu',
    address: '2330 Kalakaua Ave, Honolulu, HI 96815',
    phone: '(808) 922-6400',
    hours: {
      lunch: '11:00 AM - 4:00 PM',
      dinner: '4:00 PM - 11:00 PM',
    },
    image: '/images/locations/waikiki.jpg',
    features: ['Heart of Waikiki', 'Late Night', 'Craft Cocktails'],
  },
  {
    id: 'whalers',
    name: "Whaler's Village",
    island: 'Maui',
    address: '2435 Kaanapali Pkwy, Lahaina, HI 96761',
    phone: '(808) 661-4244',
    hours: {
      lunch: '11:00 AM - 4:00 PM',
      dinner: '4:00 PM - 10:00 PM',
    },
    image: '/images/locations/whalers.jpg',
    features: ['Shopping Center', 'Beachfront', 'Casual Dining'],
  },
]
