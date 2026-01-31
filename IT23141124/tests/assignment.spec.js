const { test, expect } = require('@playwright/test');

// ------------------------------------------------------------------
// 1. CONFIGURATION
// ------------------------------------------------------------------
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 5000,
    translation: 6000, 
    betweenTests: 1500
  },
  selectors: {
    inputField: 'textarea', 
    outputField: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// GLOBAL TIMEOUT (2 Minutes)
test.setTimeout(120000);

// ------------------------------------------------------------------
// 2. TEST DATA
// ------------------------------------------------------------------
const TEST_DATA = {
  positive: [
    { id: 'Pos_Fun_0001', input: 'malli sellam karanavaa.', expected: 'මල්ලි සෙල්ලම් කරනවා.' },
    { id: 'Pos_Fun_0002', input: 'mata dhaenma yanna baehae.', expected: 'මට දැන්ම යන්න බැහැ.' },
    { id: 'Pos_Fun_0003', input: 'oyaa parakku venavaa nam api adha mehe navathimu.', expected: 'ඔයා පරක්කු වෙනවා නම් අපි අද මෙහෙ නවතිමු.' },
    { id: 'Pos_Fun_0004', input: 'oyaa heta apee gedhara enavaadha?', expected: 'ඔයා හෙට අපේ ගෙදර එනවාද?' },
    { id: 'Pos_Fun_0005', input: 'vaahanayata naginna.', expected: 'වාහනයට නගින්න.' },
    { id: 'Pos_Fun_0006', input: 'mama eeka balanne naehae.', expected: 'මම ඒක බලන්නෙ නැහැ.' },
    { id: 'Pos_Fun_0007', input: 'mama iiye pansal giyaa.', expected: 'මම ඊයෙ පන්සල් ගියා.' },
    { id: 'Pos_Fun_0008', input: 'api heta gedhara yamu.', expected: 'අපි හෙට ගෙදර යමු.' },
    { id: 'Pos_Fun_0009', input: 'minisun vaeda karanavaa.', expected: 'මිනිසුන් වැඩ කරනවා.' },
    { id: 'Pos_Fun_0010', input: 'uu himin himin giyaa.', expected: 'ඌ හිමින් හිමින් ගියා.' },
    { id: 'Pos_Fun_0011', input: 'ikmanata ennam.', expected: 'ඉක්මනට එන්නම්.' },
    { id: 'Pos_Fun_0012', input: 'karuNaakaralaa eeka naevatha gihin dhenna.', expected: 'කරුණාකරලා ඒක නැවත ගිහින් දෙන්න.' },
    { id: 'Pos_Fun_0013', input: 'adoo eeka patta ban!', expected: 'අඩෝ ඒක පට්ට බන්!' },
    { id: 'Pos_Fun_0014', input: 'anee! oyaa adhama yanavadha?', expected: 'අනේ! ඔයා අදම යනවද?' },
    { id: 'Pos_Fun_0015', input: 'mama oyaata Rs:500k dhennam.', expected: 'මම ඔයාට Rs:500ක් දෙන්නම්.' },
    { id: 'Pos_Fun_0016', input: 'mama ATM eken salli gannavaa.', expected: 'මම ATM එකෙන් සල්ලි ගන්නවා.' },
    { id: 'Pos_Fun_0017', input: 'mama dhaen vaedak. \napi passe muNagaehemu.', expected: 'මම දැන් වැඩක්. \nඅපි පස්සෙ මුණගැහෙමු.' },
    { id: 'Pos_Fun_0018', input: 'mama Colombo yadhdhi thamayi oyaa mata call kalee.', expected: 'මම Colombo යද්දි තමයි ඔයා මට call කලේ.' },
    { id: 'Pos_Fun_0019', input: 'puLuvan nam ee varadha nivaeradhi karanna.', expected: 'පුළුවන් නම් ඒ වරද නිවැරදි කරන්න.' },
    { id: 'Pos_Fun_0020', input: 'mata adha tikak mahansiyi.', expected: 'මට අද ටිකක් මහන්සියි.' },
    { id: 'Pos_Fun_0021', input: 'suBha aluth avurudhdhak veevaa!', expected: 'සුභ අලුත් අවුරුද්දක් වේවා!' },
    { id: 'Pos_Fun_0022', input: 'mata dhaen badaginiyi.', expected: 'මට දැන් බඩගිනියි.' },
    { id: 'Pos_Fun_0023', input: 'mama heta udhee naegitala vaeda tika okkoma karanna patangannavaa.', expected: 'මම හෙට උදේ නැගිටල වැඩ ටික ඔක්කොම කරන්න පටන්ගන්නවා.' },
    { id: 'Pos_Fun_0024', input: 'shrii lQQkaava kiyanne godaak lassana ratak.', expected: 'ශ්‍රී ලංකාව කියන්නෙ ගොඩාක් ලස්සන රටක්.' },
    { id: 'Pos_Fun_0025', input: 'uu 50cm vithara dhiga sarpayek.', expected: 'ඌ 50cm විතර දිග සර්පයෙක්.' }
  ],
  negative: [
    { id: 'Neg_Fun_0001', input: 'www.ikman.lk vetha pivisenna.', expected: 'www.ikman.lk වෙත පිවිසෙන්න.' },
    { id: 'Neg_Fun_0002', input: 'amal@gmail.com vetha paNividaya evanna.', expected: 'amal@gmail.com වෙත පණිවිඩය එවන්න.' },
    { id: 'Neg_Fun_0003', input: 'Photo ekee nama venas karanna IMG.jpg kiyalaa.', expected: 'Photo එකේ නම වෙනස් කරන්න IMG.jpg කියලා.' },
    { id: 'Neg_Fun_0004', input: 'ovun magee ratata kiyanne Sri Lanka kiyalaa.', expected: 'ඔවුන් මගේ රටට කියන්නෙ Sri Lanka කියලා.' },
    { id: 'Neg_Fun_0005', input: 'mama AliExpress eken eeka order karannam.', expected: 'මම AliExpress එකෙන් ඒක order කරන්නම්.' },
    { id: 'Neg_Fun_0006', input: 'gedharayanna.', expected: 'ගෙදර යන්න.' },
    { id: 'Neg_Fun_0007', input: 'mama eyaata Apple iphone ekak thaeegi dhunnaa.', expected: 'මම එයාට Apple iphone එකක් තෑගි දුන්නා.' },
    { id: 'Neg_Fun_0008', input: 'https://www.swifttranslator.com', expected: 'https://www.swifttranslator.com' },
    { id: 'Neg_Fun_0009', input: 'mama Singlish valin liyana dheeval eeka Sinhala valata haravaa dhenavaa.', expected: 'මම Singlish වලින් ලියන දේවල් ඒක Sinhala වලට හරවා දෙනවා.' },
    { id: 'Neg_Fun_0010', input: 'mama heta Abans ekata yanavaa.', expected: 'මම හෙට Abans එකට යනවා.' },
    { id: 'Neg_Fun_0011', input: 'aeyata dhaen kohomdha?', expected: 'ඇයට දැන් කොහොමද?' }
  ],
  // NEW UI DATA SECTION
  ui: [
    { 
      id: 'Pos_UI_0001', 
      input: 'bath', 
      suggestion: 'බත්කූරා', 
      expected: 'බත්කූරා' 
    }
  ]
};

// ------------------------------------------------------------------
// 3. PAGE OBJECT (Helper Class)
// ------------------------------------------------------------------
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle'); 
  }

  async clearAndWait() {
    const input = this.page.locator(CONFIG.selectors.inputField).first();
    await input.click();
    await input.clear();
    await this.page.waitForTimeout(500);
  }

  // Method 1: For Normal Tests (Type + Space + Tab)
  async performTranslation(text) {
    const input = this.page.locator(CONFIG.selectors.inputField).first();
    await input.pressSequentially(text, { delay: 100 });
    await this.page.keyboard.press('Space');
    await this.page.waitForTimeout(300);
    await input.press('Tab'); 
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  // Method 2: NEW Method for UI Test (Type Partial + Click Dropdown)
  async performDropdownSelection(inputText, suggestionText) {
    const input = this.page.locator(CONFIG.selectors.inputField).first();
    
    // 1. Type the partial text (e.g., 'bath')
    await input.pressSequentially(inputText, { delay: 150 });
    
    // 2. Wait for the dropdown to likely appear
    await this.page.waitForTimeout(2000);

    // 3. Click the suggestion from the list
    // We look for text strictly visible on the page
    await this.page.getByText(suggestionText).first().click();

    // 4. Wait for update
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getActualOutput() {
    const outputLocator = this.page.locator(CONFIG.selectors.outputField);
    const correctOutputBox = outputLocator.filter({ hasNot: this.page.locator('textarea') }).first();

    let actualText = "";
    try {
      actualText = await correctOutputBox.textContent();
    } catch (e) {
      actualText = "Error: Could not find output box";
    }
    return actualText ? actualText.trim() : "";
  }
}

// ------------------------------------------------------------------
// 4. TEST SUITE
// ------------------------------------------------------------------
test.describe('Assignment 1 - SwiftTranslator Automation', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // --- POSITIVE FUNCTIONAL TESTS ---
  test.describe('Positive Functional Tests', () => {
    for (const tc of TEST_DATA.positive) {
      test(`${tc.id}: Input "${tc.input}"`, async () => {
        await translator.clearAndWait();
        await translator.performTranslation(tc.input);
        const actual = await translator.getActualOutput();
        
        const isMatch = actual.includes(tc.expected);
        console.log(`\nFor ${tc.id}:`);
        console.log(`Input Box has: "${tc.input}"`);
        console.log(`Expected:      "${tc.expected}"`);
        console.log(`Actual:        "${actual}"`);
        console.log(`Comparison:    ${isMatch ? 'Match! (Pass)' : 'No Match! (Fail)'}`);
        console.log('--------------------------------------------------');

        expect(actual).toContain(tc.expected);
      });
    }
  });

  // --- NEGATIVE FUNCTIONAL TESTS ---
  test.describe('Negative Functional Tests', () => {
    for (const tc of TEST_DATA.negative) {
      test(`${tc.id}: Input "${tc.input}"`, async () => {
        await translator.clearAndWait();
        await translator.performTranslation(tc.input);
        const actual = await translator.getActualOutput();
        
        const isMatch = actual.includes(tc.expected);
        console.log(`\nFor ${tc.id}:`);
        console.log(`Input Box has: "${tc.input}"`);
        console.log(`Expected:      "${tc.expected}"`);
        console.log(`Actual:        "${actual}"`);
        console.log(`Comparison:    ${isMatch ? 'Match! (Pass)' : 'No Match! (Fail)'}`);
        console.log('--------------------------------------------------');

        expect(actual).toContain(tc.expected);
      });
    }
  });

  // --- NEW: UI FUNCTIONAL TESTS ---
  test.describe('UI Functional Tests', () => {
    for (const tc of TEST_DATA.ui) {
      test(`${tc.id}: Suggestion Dropdown "${tc.input}" -> "${tc.suggestion}"`, async () => {
        await translator.clearAndWait();
        
        // Use the new Dropdown Method
        await translator.performDropdownSelection(tc.input, tc.suggestion);
        
        const actual = await translator.getActualOutput();
        
        const isMatch = actual.includes(tc.expected);
        console.log(`\nFor ${tc.id}:`);
        console.log(`Typed Input:   "${tc.input}"`);
        console.log(`Selected:      "${tc.suggestion}"`);
        console.log(`Expected Out:  "${tc.expected}"`);
        console.log(`Actual Out:    "${actual}"`);
        console.log(`Comparison:    ${isMatch ? 'Match! (Pass)' : 'No Match! (Fail)'}`);
        console.log('--------------------------------------------------');

        expect(actual).toContain(tc.expected);
      });
    }
  });

});