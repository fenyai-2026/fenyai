import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabase/client';

export interface Category {
  id: string;
  name: string;
  slug: string;
  sort: number | null;
}

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = useCallback(async () => {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('sort', { ascending: true });
    
    if (!error) setCategories(data || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const createCategory = async (name: string, slug: string) => {
    const { error } = await supabase
      .from('categories')
      .insert([{ name, slug, sort: categories.length }]);
    if (!error) fetchCategories();
    return !error;
  };

  const updateCategory = async (id: string, data: Partial<Category>) => {
    const { error } = await supabase
      .from('categories')
      .update(data)
      .eq('id', id);
    if (!error) fetchCategories();
    return !error;
  };

  const deleteCategory = async (id: string) => {
    const { error } = await supabase
      .from('categories')
      .delete()
      .eq('id', id);
    if (!error) fetchCategories();
    return !error;
  };

  return { categories, loading, createCategory, updateCategory, deleteCategory, refresh: fetchCategories };
}
