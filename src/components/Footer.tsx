export function Footer() {
  return (
    <footer className="py-8 w- w-full">
      <p className="text-center text-sm text-gray-600">
        Copyright © {(new Date()).toString().split(' ')[3]} WeatherApp. All rights reserved.
      </p>
    </footer>
  )
}