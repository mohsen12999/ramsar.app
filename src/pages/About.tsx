import React from "react";
import Layout from "../components/Layout";

const About = () => (
  <Layout>
    <div className="hero bg-base-200 main">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <img
          src={process.env.PUBLIC_URL + "/img/national-park.png"}
          alt="رامسر اپ"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="mb-5 text-5xl font-bold vazir-font">درباره ما</h1>
          <p className="mb-5 vazir-font">
            من محسن شعبانیان سازنده این اپ هستم. رامسر اپ یک پروژه شخصی هست و که
            بدون هیچ چشم‌داشت مالی برای کمک به شناخت و پیدا کردن امکانات در سطح
            شهر با کمک خود همشهریان ساخته شده.
          </p>
          <p className="mb-5 vazir-font">
            طرح ساخت این نرم افزار و نمونه‌های بهتر و با امکانات بیشتر سال‌هاست
            با بدقولی و پیمان شکنی‌های مسئولین شهری به کناری افتاده‌اند. این
            نرم‌افزار ساده آخرین تلاشم هست تا به صورت مستقل و با کمک همشهریان و
            علاقه‌مندان این پروژه را به سرانجام برسانیم.
          </p>
          <p className="mb-5 vazir-font">
            به شدت منتظر پیشنهادات، انتقادات و معرفی مکان جدید از طرف شما هستیم.
          </p>
          <p className="mb-2 vazir-font">
            <a
              href="https://instagram.com/ramsarapp"
              dir="ltr"
              className="btn btn-sm btn-outline btn-secondary mr-2"
            >
              <svg
                width="24"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-4 h-4 mr-1 stroke-current"
              >
                <title>Instagram icon</title>
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
              </svg>
              @RamsarApp
            </a>

            <a
              href="https://t.me/RamsarApp"
              target="_blank"
              dir="ltr"
              className="btn btn-sm btn-outline btn-primary mr-2"
            >
              <svg
                width="24"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-4 h-4 mr-1 stroke-current"
              >
                <title>Telegram icon</title>
                <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"></path>
              </svg>
              @RamsarApp
            </a>

            <a
              href="mailto:info@Ramsar.App"
              target="_blank"
              dir="ltr"
              className="btn btn-sm btn-outline btn-accent mr-2"
            >
              <svg
                width="24"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-4 h-4 mr-1 stroke-current"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              info@Ramsar.App
            </a>
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default About;
