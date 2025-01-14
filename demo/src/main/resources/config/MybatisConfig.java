package config;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

@Configuration
@MapperScan(basePackages = "com.gtit.api.mapper")
public class MybatisConfig {    
    @Bean
    public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception {
        final SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
        sessionFactory.setDataSource(dataSource);
        
        PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
        sessionFactory.setMapperLocations(resolver.getResources("file:src/main/java/com/example/demo/sqlmap/*.xml"));
        
        Resource myBatisConfig = new PathMatchingResourcePatternResolver().getResource("classpath:mapper/mybatis-config.xml");
        sessionFactory.setConfigLocation(myBatisConfig);
        
        sessionFactory.setTypeAliasesPackage("com.gtit.api.vo");
        
        return sessionFactory.getObject();
    }

}