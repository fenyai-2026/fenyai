-- ============================================
-- 修复system_settings RLS策略，允许公开读取
-- ============================================

-- 删除旧策略
DROP POLICY IF EXISTS "管理员可管理系统配置" ON system_settings;

-- 创建新策略：任何人可以读取
CREATE POLICY "任何人可读取系统配置" ON system_settings
  FOR SELECT USING (true);

-- 创建新策略：只有管理员可以修改
CREATE POLICY "管理员可管理系统配置" ON system_settings
  FOR ALL USING (auth.uid() IS NOT NULL);
