import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PUBLICATIONS_LIST, REFERENCES_LIST } from "@/constants";
import { Typography } from "@/components/ui/Typography";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useTranslation } from "react-i18next";

const ITEMS_PER_PAGE = 5;
const VISIBLE_PAGES = 3;
const TEXT_LOC = "publicationsAndReferencesPage.";

const PublicationsAndReferencesPage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"publications" | "references">(
    "publications"
  );
  const [currentPage, setCurrentPage] = useState(1);

  // Get current items and total pages
  const currentList = activeTab === "publications" ? PUBLICATIONS_LIST : REFERENCES_LIST;
  const currentItems = currentList.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(currentList.length / ITEMS_PER_PAGE);

  const handleTabChange = (value: string) => {
    setActiveTab(value as "publications" | "references");
    setCurrentPage(1);
  };

  // Get page numbers to display
  const getPageNumbers = () => {
    // If total pages is less than visible pages, show all
    if (totalPages <= VISIBLE_PAGES) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Calculate the half range (how many pages to show on each side of current)
    const halfRange = Math.floor(VISIBLE_PAGES / 2);
    let startPage = currentPage - halfRange;
    let endPage = currentPage + halfRange;

    // Adjust if we're near the start
    if (startPage < 1) {
      startPage = 1;
      endPage = VISIBLE_PAGES;
    }

    // Adjust if we're near the end
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = totalPages - VISIBLE_PAGES + 1;
    }

    // Generate the page numbers
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  const pageNumbers = getPageNumbers();

  return (
    <Section className='flex flex-col w-full'>
      <Container className='flex flex-col items-center justify-center'>
        {/* Content */}
        <Tabs
          defaultValue='publications'
          className='max-w-2xl px-4'
          onValueChange={handleTabChange}
        >
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='publications'>{t(TEXT_LOC + "publications")}</TabsTrigger>
            <TabsTrigger value='references'>{t(TEXT_LOC + "references")}</TabsTrigger>
          </TabsList>
          <TabsContent value='publications'>
            {currentItems.map((item, index) => (
              <Typography variant='blockquote' key={index} className='my-5'>
                <span className='mr-2 font-black'>
                  {(currentPage - 1) * ITEMS_PER_PAGE + index + 1}.
                </span>
                {item}
              </Typography>
            ))}
          </TabsContent>
          <TabsContent value='references'>
            {currentItems.map((item, index) => (
              <Typography variant='blockquote' key={index} className='my-5'>
                <span className='mr-2 font-black'>
                  {(currentPage - 1) * ITEMS_PER_PAGE + index + 1}.
                </span>
                {item}
              </Typography>
            ))}
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination className='mt-5'>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  className={
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                  }
                  aria-disabled={currentPage === 1}
                />
              </PaginationItem>

              {/* Always show first page */}
              <PaginationItem>
                <PaginationLink
                  onClick={() => setCurrentPage(1)}
                  isActive={currentPage === 1}
                >
                  1
                </PaginationLink>
              </PaginationItem>

              {/* Show ellipsis when needed */}
              {currentPage > VISIBLE_PAGES && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              {/* Middle Pages */}
              {pageNumbers.map((page) => {
                if (page === 1 || page === totalPages) return null;
                return (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => setCurrentPage(page)}
                      isActive={currentPage === page}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              {/* Show ellipsis when needed */}
              {currentPage < totalPages - (VISIBLE_PAGES - 1) && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              {/* Always show last page if more than 1 page */}
              {totalPages > 1 && (
                <PaginationItem>
                  <PaginationLink
                    onClick={() => setCurrentPage(totalPages)}
                    isActive={currentPage === totalPages}
                  >
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              )}

              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  className={
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }
                  aria-disabled={currentPage === 1}
                ></PaginationNext>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </Container>
    </Section>
  );
};

export default PublicationsAndReferencesPage;
