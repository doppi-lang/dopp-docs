export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Kirish", href: "/introduction" },
      {
        title: "O'rnatish",
        href: "/installation",
      },
      { title: "Quick Start Guide", href: "/quick-start-guide" },
      {
        title: "Project Structure",
        href: "/project-structure",
      },
      {
        title: "Components",
        href: "/components",
        items: [
          { title: "Stepper", href: "/stepper" },
          { title: "Tabs", href: "/tabs" },
          { title: "Note", href: "/note" },
          { title: "Code Block", href: "/code-block" },
          { title: "Image & Link", href: "/image-link" },
          { title: "Custom", href: "/custom" },
        ],
      },
      { title: "Themes", href: "/themes" },
      {
        title: "Customize",
        href: "/customize",
      },
    ],
  },
  {
    title: "Sintaksis",
    href: "/syntax",
    noLink: true,
    items: [
      { title: "variables", href: "/variables" },
      { title: "functions", href: "/functions" },
      { title: "conditionals", href: "/conditionals" },
      { title: "loops", href: "/loops" },
      { title: "arrays", href: "/arrays" },
      { title: "objects", href: "/objects" },
      { title: "o'zgarmas funksiyalar", href: "/expect-functions" },
      { title: "Switch & Case", href: "switch-case" }
    ]
  },
];

type Page = { title: string; href: string };

function getRecursiveAllLinks(node: EachRoute, baseHref = ""): Page[] {
  const fullHref = `${baseHref}${node.href}`;
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: fullHref });
  }
  node.items?.forEach((subNode) => {
    ans.push(...getRecursiveAllLinks(subNode, fullHref));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecursiveAllLinks(it)).flat();
