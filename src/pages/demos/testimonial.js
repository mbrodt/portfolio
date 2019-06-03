import React from 'react'
import Demo from '../../components/demo'

const Testimonial = () => {
  return (
    <Demo>
      <div class="bg-white max-w-lg p-8 rounded-lg shadow-lg relative">
        <svg
          class="fill-current text-blue-200 h-8 w-8 absolute left-0 top-0 mt-6 ml-4 opacity-75"
          width="170"
          height="133"
          viewBox="0 0 170 133"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M43.2737 59.0662C44.8195 47.3464 55.1794 36.7383 74.1297 27.4942L77.5421 25.8294L63.5518 0L60.3934 1.60084C20.3194 21.9147 0 50.623 0 86.9292C0 99.4562 3.9765 110.275 11.8198 119.087C19.7732 128.021 29.425 132.552 40.5092 132.552C50.4687 132.552 58.9139 129.005 65.6102 122.01C72.2628 115.059 75.636 106.426 75.636 96.349C75.636 86.8271 72.2288 78.3413 65.5088 71.1274C59.5818 64.7642 52.1135 60.7166 43.2737 59.0662ZM34 90.7699C-17.3522 27.563 48.5176 125.273 40.5092 125.273C31.4669 125.273 59.6038 129.429 53 122.01C46.2852 114.466 40.5092 97.7687 40.5092 86.9292C40.5092 70.2893 31.2689 67.7578 40.5092 54.7699C49.3261 42.378 40.7022 39.4906 58 30.2699L67.5517 22.6645C46.4729 33.7105 35.793 46.9889 35.793 62.1696L16.9916 76.7699L32 85.2699C40.6996 86.2547 33.4823 80.9817 39.0225 86.9292C44.5228 92.8342 34 83.042 34 90.7699C39.3866 85.1416 34.0003 99.0226 34 90.7699Z" />
          <path d="M135.274 59.3361C136.819 47.6163 147.179 37.0082 166.13 27.7641L169.542 26.0993L155.552 0.269897L152.393 1.87074C112.319 22.1846 92 50.8929 92 87.1991C92 99.726 95.9765 110.545 103.82 119.357C111.773 128.291 121.425 132.822 132.509 132.822C142.469 132.822 150.914 129.275 157.61 122.279C164.263 115.329 167.636 106.696 167.636 96.6189C167.636 87.097 164.229 78.6112 157.509 71.3973C151.582 65.0341 144.114 60.9865 135.274 59.3361ZM126 91.0398C74.6478 27.8329 140.518 125.543 132.509 125.543C123.467 125.543 151.604 129.699 145 122.279C138.285 114.736 132.509 98.0386 132.509 87.1991C132.509 70.5592 123.269 68.0277 132.509 55.0398C141.326 42.6479 132.702 39.7605 150 30.5398L159.552 22.9344C138.473 33.9804 127.793 47.2588 127.793 62.4395L108.992 77.0398L124 85.5398C132.7 86.5246 125.482 81.2515 131.022 87.1991C136.523 93.104 126 83.3119 126 91.0398C131.387 85.4115 126 99.2925 126 91.0398Z" />
        </svg>

        <p class="mb-4 italic text-lg text-gray-700 font-serif">
          I don't care what anyone says, the McDouble is the best
          bang-for-your-buck burger on the market. Nothing else even comes
          close.
        </p>
        <div class="flex items-center">
          <img
            class="w-8 h-8 rounded-full mr-4"
            src="https://avatars2.githubusercontent.com/u/21239560?s=460&v=4"
            alt=""
          />
          <div>
            <p class="text-xs font-bold text-gray-700">Tina Vanstone</p>
            <p class="text-xs text-purple-600 font-bold">21 Industries</p>
          </div>
        </div>
      </div>
    </Demo>
  )
}

export default Testimonial
