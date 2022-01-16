interface NavbarEntry {
  title: string;
  destination?: string;
  children?: Omit<NavbarEntry, "children">[];
}
