// import com.microsoft.playwright.*;
// import com.microsoft.playwright.options.*;
// import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;
// import java.util.*;

// public class Example {
//   public static void main(String[] args) {
//     try (Playwright playwright = Playwright.create()) {
//       Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions()
//         .setHeadless(false));
//       BrowserContext context = browser.newContext();
//       Page page = context.newPage();
//       page.navigate("https://demoblaze.com/");
//       page.getByRole(AriaRole.LINK, new Page.GetByRoleOptions().setName("Contact")).click();
//       page.getByLabel("New message").getByText("Close").click();
//       page.close();
//     }
//   }
// }