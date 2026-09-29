import { LogoMark, STACK_LOGO } from "@/components/logo-icons";
import { IndexRow, IndexRows } from "@/components/section";
import { stack } from "@/content/stack";

/** The stack: product mark, name, and what he did with it. */
export function StackList() {
  return (
    <IndexRows>
      {stack.map((s) => (
        <IndexRow
          key={s.name}
          mark={
            <LogoMark
              name={STACK_LOGO[s.icon]}
              className="size-9 transition-transform group-hover:scale-110"
            />
          }
          title={s.name}
        >
          {s.body}
        </IndexRow>
      ))}
    </IndexRows>
  );
}
