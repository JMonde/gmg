import { useState, useCallback } from 'react';

export interface ContactFilter {
  field: string;
  operator: string;
  value: string;
}

export interface ContactSort {
  field: string;
  direction: 'asc' | 'desc';
}

export interface ContactFiltersState {
  filters: ContactFilter[];
  sort: ContactSort | null;
}

export const useContactFilters = () => {
  const [filters, setFilters] = useState<ContactFilter[]>([]);
  const [sort, setSort] = useState<ContactSort | null>(null);

  const addFilter = useCallback((filter: ContactFilter) => {
    setFilters(prev => [...prev, filter]);
  }, []);

  const removeFilter = useCallback((index: number) => {
    setFilters(prev => prev.filter((_, i) => i !== index));
  }, []);

  const updateFilter = useCallback((index: number, filter: ContactFilter) => {
    setFilters(prev => prev.map((f, i) => i === index ? filter : f));
  }, []);

  const setSortBy = useCallback((sortBy: ContactSort) => {
    setSort(sortBy);
  }, []);

  const clearAllFilters = useCallback(() => {
    setFilters([]);
    setSort(null);
  }, []);

  return {
    filters,
    sort,
    addFilter,
    removeFilter,
    updateFilter,
    setSortBy,
    clearAllFilters,
  };
};