import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comprehensive China Visa-Free Travel Guide 2024 | Visit China",
  description: "Explore our detailed China Visa-Free Travel Guide for 2024. Discover China's latest visa exemption policies, transit visa-free options, and find answers to common questions.",
};

// Country flag mappings
const countryFlags: { [key: string]: string } = {
  '阿尔巴尼亚': '🇦🇱',
  '亚美尼亚': '🇦🇲',
  '波黑': '🇧🇦',
  '圣马力诺': '🇸🇲',
  '毛里求斯': '🇲🇺',
  '泰国': '🇹🇭',
  '新加坡': '🇸🇬',
  '马尔代夫': '🇲🇻',
  '哈萨克斯坦': '🇰🇿',
  '安提瓜和巴布达': '🇦🇬',
  '阿联酋': '🇦🇪',
  '巴巴多斯': '🇧🇧',
  '巴哈马': '🇧🇸',
  '白俄罗斯': '🇧🇾',
  '多米尼克': '🇩🇲',
  '厄瓜多尔': '🇪🇨',
  '斐济': '🇫🇯',
  '格林纳达': '🇬🇩',
  '卡塔尔': '🇶🇦',
  '塞尔维亚': '🇷🇸',
  '塞舌尔': '🇸🇨',
  '苏里南': '🇸🇷',
  '汤加': '🇹🇴',
  '格鲁吉亚': '🇬🇪',
  '文莱': '🇧🇳',
  '蒙古': '🇲🇳',
  '法国': '🇫🇷',
  '德国': '🇩🇪',
  '意大利': '🇮🇹',
  '荷兰': '🇳🇱',
  '西班牙': '🇪🇸',
  '马来西亚': '🇲🇾',
  '瑞士': '🇨🇭',
  '爱尔兰': '🇮🇪',
  '匈牙利': '🇭🇺',
  '奥地利': '🇦🇹',
  '比利时': '🇧🇪',
  '卢森堡': '🇱🇺',
  '澳大利亚': '🇦🇺',
  '新西兰': '🇳🇿',
  '波兰': '🇵🇱',
  '葡萄牙': '🇵🇹',
  '希腊': '🇬🇷',
  '塞浦路斯': '🇨🇾',
  '斯洛文尼亚': '🇸🇮',
  '斯洛伐克': '🇸🇰',
  '挪威': '🇳🇴',
  '芬兰': '🇫🇮',
  '丹麦': '🇩🇰',
  '冰岛': '🇮🇸',
  '安道尔': '🇦🇩',
  '摩纳哥': '🇲🇨',
  '列支敦士登': '🇱🇮',
  '韩国': '🇰🇷',
  '保加利亚': '🇧🇬',
  '罗马尼亚': '🇷🇴',
  '马耳他': '🇲🇹',
  '克罗地亚': '🇭🇷',
  '黑山': '🇲🇪',
  '北马其顿': '🇲🇰',
  '爱沙尼亚': '🇪🇪',
  '拉脱维亚': '🇱🇻',
  '日本': '🇯🇵',
  '阿根廷': '🇦🇷',
  '巴西': '🇧🇷',
  '加拿大': '🇨🇦',
  '智利': '🇨🇱',
  '捷克': '🇨🇿',
  '墨西哥': '🇲🇽',
  '俄罗斯': '🇷🇺',
  '英国': '🇬🇧',
  '美国': '🇺🇸'
};

export default function VisaFreePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Comprehensive China Visa-Free Travel Guide 2024
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Welcome, travelers! Whether you're planning a short trip or a pleasant layover in China, you've come to the right place. Our Comprehensive China Visa-Free Travel Guide is designed for passport holders seeking hassle-free entry into China. Explore various visa exemption options, understand how China has streamlined its entry policies, and embark on your adventure without the need for a visa. Make your journey to China smooth and enjoyable with our detailed insights and practical tips.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          {/* Table of Contents */}
          <nav className="mt-6 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#visa-policies" className="hover:text-blue-600 hover:underline">China's Visa Exemption Policies</a></li>
              <li><a href="#visa-free-countries" className="hover:text-blue-600 hover:underline">Visa-Exempt Countries</a></li>
              <li><a href="#entry-process" className="hover:text-blue-600 hover:underline">Entry Process</a></li>
              <li><a href="#transit-policies" className="hover:text-blue-600 hover:underline">China's Visa-Free Transit Policies</a></li>
              <li><a href="#faq" className="hover:text-blue-600 hover:underline">FAQs</a></li>
            </ul>
          </nav>

          {/* Visa Policies Section */}
          <section id="visa-policies" className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">China's Visa Exemption Policies</h2>
            <p className="text-lg text-gray-600 mb-8">
              China's Visa Exemption Policies allow travelers from selected countries to enter China without obtaining a visa for short-term stays. These policies aim to simplify the entry process for tourists, business visitors, and others, fostering increased travel and collaboration.
            </p>
          </section>

          {/* Visa-Free Countries Section */}
          <section id="visa-free-countries" className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Visa-Exempt Countries</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ordinary passport holders from the following countries are eligible to enter China without a visa, provided their visit does not exceed the designated visa-free duration listed below.
            </p>

            <div className="space-y-8">
              {/* 90 days */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">90 Days</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Albania', flag: '🇦🇱' },
                    { name: 'Armenia', flag: '🇦🇲' },
                    { name: 'Bosnia and Herzegovina', flag: '🇧🇦' },
                    { name: 'San Marino', flag: '🇸🇲' }
                  ].map((country) => (
                    <div key={country.name} className="bg-gray-50 rounded-md p-3 text-center">
                      <span className="text-2xl mr-2">{country.flag}</span>
                      <span className="text-gray-900 font-medium">{country.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 60 days */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">60 Days</h3>
                <div className="bg-gray-50 rounded-md p-3 text-center">
                  <span className="text-2xl mr-2">🇲🇺</span>
                  <span className="text-gray-900 font-medium">Mauritius</span>
                </div>
              </div>

              {/* 30 days long-term */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">30 Days (Permanent Policy)</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { name: 'Thailand', flag: '🇹🇭' },
                    { name: 'Singapore', flag: '🇸🇬' },
                    { name: 'Maldives', flag: '🇲🇻' },
                    { name: 'Kazakhstan', flag: '🇰🇿' },
                    { name: 'Antigua and Barbuda', flag: '🇦🇬' },
                    { name: 'UAE', flag: '🇦🇪' },
                    { name: 'Barbados', flag: '🇧🇧' },
                    { name: 'Bahamas', flag: '🇧🇸' },
                    { name: 'Belarus', flag: '🇧🇾' },
                    { name: 'Dominica', flag: '🇩🇲' },
                    { name: 'Ecuador', flag: '🇪🇨' },
                    { name: 'Fiji', flag: '🇫🇯' },
                    { name: 'Grenada', flag: '🇬🇩' },
                    { name: 'Qatar', flag: '🇶🇦' },
                    { name: 'Serbia', flag: '🇷🇸' },
                    { name: 'Seychelles', flag: '🇸🇨' },
                    { name: 'Suriname', flag: '🇸🇷' },
                    { name: 'Tonga', flag: '🇹🇴' },
                    { name: 'Georgia', flag: '🇬🇪' },
                    { name: 'Brunei', flag: '🇧🇳' },
                    { name: 'Mongolia', flag: '🇲🇳' }
                  ].map((country) => (
                    <div key={country.name} className="bg-gray-50 rounded-md p-2 text-center">
                      <span className="text-lg mr-1">{country.flag}</span>
                      <span className="text-gray-900 text-sm">{country.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 30 days until 2025 */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">30 Days (Valid Until December 31, 2025)</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { name: 'France', flag: '🇫🇷' },
                    { name: 'Germany', flag: '🇩🇪' },
                    { name: 'Italy', flag: '🇮🇹' },
                    { name: 'Netherlands', flag: '🇳🇱' },
                    { name: 'Spain', flag: '🇪🇸' },
                    { name: 'Malaysia', flag: '🇲🇾' },
                    { name: 'Switzerland', flag: '🇨🇭' },
                    { name: 'Ireland', flag: '🇮🇪' },
                    { name: 'Hungary', flag: '🇭🇺' },
                    { name: 'Austria', flag: '🇦🇹' },
                    { name: 'Belgium', flag: '🇧🇪' },
                    { name: 'Luxembourg', flag: '🇱🇺' },
                    { name: 'Australia', flag: '🇦🇺' },
                    { name: 'New Zealand', flag: '🇳🇿' },
                    { name: 'Poland', flag: '🇵🇱' },
                    { name: 'Portugal', flag: '🇵🇹' },
                    { name: 'Greece', flag: '🇬🇷' },
                    { name: 'Cyprus', flag: '🇨🇾' },
                    { name: 'Slovenia', flag: '🇸🇮' },
                    { name: 'Slovakia', flag: '🇸🇰' },
                    { name: 'Norway', flag: '🇳🇴' },
                    { name: 'Finland', flag: '🇫🇮' },
                    { name: 'Denmark', flag: '🇩🇰' },
                    { name: 'Iceland', flag: '🇮🇸' },
                    { name: 'Andorra', flag: '🇦🇩' },
                    { name: 'Monaco', flag: '🇲🇨' },
                    { name: 'Liechtenstein', flag: '🇱🇮' },
                    { name: 'South Korea', flag: '🇰🇷' },
                    { name: 'Bulgaria', flag: '🇧🇬' },
                    { name: 'Romania', flag: '🇷🇴' },
                    { name: 'Malta', flag: '🇲🇹' },
                    { name: 'Croatia', flag: '🇭🇷' },
                    { name: 'Montenegro', flag: '🇲🇪' },
                    { name: 'North Macedonia', flag: '🇲🇰' },
                    { name: 'Estonia', flag: '🇪🇪' },
                    { name: 'Latvia', flag: '🇱🇻' },
                    { name: 'Japan', flag: '🇯🇵' }
                  ].map((country) => (
                    <div key={country.name} className="bg-gray-50 rounded-md p-2 text-center">
                      <span className="text-lg mr-1">{country.flag}</span>
                      <span className="text-gray-900 text-sm">{country.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Entry Process Section */}
          <section id="entry-process" className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Entry Process</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <ol className="space-y-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">1</span>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Complete the Entry Card</h3>
                    <p className="text-gray-600 mt-1">Upon arrival at the airport, obtain and fill out the entry card with your personal information, including name, passport number, flight details, purpose of visit, and address of stay. Ensure you select the visa-free option.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">2</span>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Fingerprint Collection</h3>
                    <p className="text-gray-600 mt-1">Use the self-service kiosk to submit your fingerprints and print the receipt. If you have previously provided fingerprints, you can simply print the receipt.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">3</span>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Customs Clearance</h3>
                    <p className="text-gray-600 mt-1">Present your passport and completed entry card to the customs officer. Answer any questions they may have and confirm the duration of your stay in China.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">4</span>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Baggage Claim</h3>
                    <p className="text-gray-600 mt-1">After clearing customs, follow the signs to the baggage claim area to collect your luggage and complete the entry process.</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          {/* Transit Policies Section */}
          <section id="transit-policies" className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">China's Visa-Free Transit Policies</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <p className="text-lg text-gray-600 mb-6">
                China offers visa-free transit for eligible travelers from select countries, allowing stays of up to 240 hours (10 days) when traveling to a third country or region. With the recent expansion of the visa-free policy, travelers can now enter through any of 60 open ports across 24 provinces, making it a great opportunity to explore China during a short stopover without the need for a visa.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligible Countries for 240-Hour Visa-Free Transit (54 countries)</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {[
                    { name: 'Albania', flag: '🇦🇱' }, { name: 'Argentina', flag: '🇦🇷' }, { name: 'Australia', flag: '🇦🇺' }, { name: 'Austria', flag: '🇦🇹' },
                    { name: 'Belarus', flag: '🇧🇾' }, { name: 'Belgium', flag: '🇧🇪' }, { name: 'Brazil', flag: '🇧🇷' }, { name: 'Brunei', flag: '🇧🇳' },
                    { name: 'Bulgaria', flag: '🇧🇬' }, { name: 'Canada', flag: '🇨🇦' }, { name: 'Chile', flag: '🇨🇱' }, { name: 'Croatia', flag: '🇭🇷' },
                    { name: 'Cyprus', flag: '🇨🇾' }, { name: 'Czech Republic', flag: '🇨🇿' }, { name: 'Denmark', flag: '🇩🇰' }, { name: 'Estonia', flag: '🇪🇪' },
                    { name: 'Finland', flag: '🇫🇮' }, { name: 'France', flag: '🇫🇷' }, { name: 'Germany', flag: '🇩🇪' }, { name: 'Greece', flag: '🇬🇷' },
                    { name: 'Hungary', flag: '🇭🇺' }, { name: 'Iceland', flag: '🇮🇸' }, { name: 'Ireland', flag: '🇮🇪' }, { name: 'Italy', flag: '🇮🇹' },
                    { name: 'Japan', flag: '🇯🇵' }, { name: 'Latvia', flag: '🇱🇻' }, { name: 'Lithuania', flag: '🇱🇹' }, { name: 'Luxembourg', flag: '🇱🇺' },
                    { name: 'Malta', flag: '🇲🇹' }, { name: 'Mexico', flag: '🇲🇽' }, { name: 'Monaco', flag: '🇲🇨' }, { name: 'Montenegro', flag: '🇲🇪' },
                    { name: 'Netherlands', flag: '🇳🇱' }, { name: 'New Zealand', flag: '🇳🇿' }, { name: 'North Macedonia', flag: '🇲🇰' }, { name: 'Norway', flag: '🇳🇴' },
                    { name: 'Poland', flag: '🇵🇱' }, { name: 'Portugal', flag: '🇵🇹' }, { name: 'Qatar', flag: '🇶🇦' }, { name: 'Romania', flag: '🇷🇴' },
                    { name: 'Russia', flag: '🇷🇺' }, { name: 'Serbia', flag: '🇷🇸' }, { name: 'Singapore', flag: '🇸🇬' }, { name: 'Slovakia', flag: '🇸🇰' },
                    { name: 'Slovenia', flag: '🇸🇮' }, { name: 'Spain', flag: '🇪🇸' }, { name: 'Sweden', flag: '🇸🇪' }, { name: 'Switzerland', flag: '🇨🇭' },
                    { name: 'Ukraine', flag: '🇺🇦' }, { name: 'UAE', flag: '🇦🇪' }, { name: 'United Kingdom', flag: '🇬🇧' }, { name: 'United States', flag: '🇺🇸' }
                  ].map((country) => (
                    <div key={country.name} className="bg-gray-50 rounded px-2 py-1 text-center">
                      <span className="text-lg mr-1">{country.flag}</span>
                      <span className="text-gray-900 text-sm">{country.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Required Documents for Transit</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>A valid passport issued by one of the 54 eligible countries</li>
                    <li>Visa for the third country or region you are traveling to</li>
                    <li>Confirmed onward tickets to a third country or region within the specified time frame</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Visa-Free Transit Entry Process</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Upon arrival, fill out an entry information card with your personal details, purpose of visit, and duration of stay</li>
                    <li>Submit your passport, entry card, and confirmed onward ticket to the border inspection authorities</li>
                    <li>Answer any questions from the officers truthfully</li>
                    <li>Once approved, you will receive a temporary entry permit and an entry stamp indicating your allowed duration of stay</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Important Considerations During Transit</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Do not exceed the maximum duration of your visa-free stay. If an extension is needed due to unforeseen circumstances, apply for the appropriate permit at the local public security bureau</li>
                    <li>Hotels will handle accommodation registration for you. If staying elsewhere, ensure you or your host register with the local public security bureau within 24 hours of arrival</li>
                    <li>Stay within the designated areas permitted by your temporary entry permit. Unauthorized travel beyond these areas or overstaying can lead to legal consequences and affect future visa applications</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Transit Departure Process</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Prepare your passport, temporary entry permit, and any other relevant documents</li>
                    <li>Proceed to the designated exit port within the specified time frame</li>
                    <li>At departure, present your documents to the border inspection officers, undergo inspection, and return your temporary entry permit</li>
                    <li>After verification, complete the departure procedures and leave China</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">FAQs</h2>
            <div className="space-y-6">
              {[
                {
                  question: "Do foreigners need to pre-register with Chinese embassies or consulates before traveling to China under the visa-free policy?",
                  answer: "No pre-registration with Chinese embassies or consulates is required under the visa-free policy."
                },
                {
                  question: "Will the Chinese border control authorities verify the purpose of my visit? Besides a passport, do I need to carry other documents when entering China?",
                  answer: "Yes, they will verify your purpose of visit. It is recommended to carry supporting documents such as itinerary, hotel booking confirmations, and return tickets."
                },
                {
                  question: "Are there any special requirements for minors entering China under the visa-free policy?",
                  answer: "Minors have the same requirements as adults, but it is recommended to carry birth certificates or guardian consent letters."
                },
                {
                  question: "What are the requirements regarding the type and validity of travel documents?",
                  answer: "A valid passport is required, and the passport validity must meet the specified requirements."
                },
                {
                  question: "How is the 15-day stay period calculated?",
                  answer: "The duration is calculated from the day of entry, including both entry and departure days."
                },
                {
                  question: "Can I depart from a country other than my country of nationality while under the visa-free policy?",
                  answer: "Yes, the visa-free policy does not restrict the departure country."
                },
                {
                  question: "Does the visa-free policy apply to all modes of entry, including land, sea, and air?",
                  answer: "Yes, it applies to land, sea, and air entry methods."
                },
                {
                  question: "Can tour groups enter China under the visa-free policy?",
                  answer: "Yes, tour groups can also enter China under the visa-free policy."
                },
                {
                  question: "Can I extend my stay if it exceeds the visa-free period?",
                  answer: "For extensions due to force majeure, you should apply to the local public security bureau's exit-entry administration department."
                },
                {
                  question: "Is multiple entry allowed under the visa-free policy? Are there any restrictions on the number of entries or total stay days?",
                  answer: "The policy primarily covers single entry. For multiple entries, please consult specific regulations."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}