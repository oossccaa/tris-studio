import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProjectDetail from "@/components/ProjectDetail";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "找不到專案 — Tris Studio" };
  return {
    title: `${project.title} — Tris Studio`,
    description: project.detail?.overview,
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project || !project.detail) notFound();

  return (
    <>
      <Nav />
      <ProjectDetail detail={project.detail} image={project.image} />
      <Footer />
    </>
  );
}
