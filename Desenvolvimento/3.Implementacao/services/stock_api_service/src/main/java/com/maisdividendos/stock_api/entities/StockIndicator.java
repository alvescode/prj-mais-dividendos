// package com.maisdividendos.stock_api.entities;

// import jakarta.persistence.*;
// import java.time.LocalDateTime;

// @Entity
// @Table(name = "indicadores")
// public class StockIndicator {

// @Id
// @GeneratedValue(strategy = GenerationType.IDENTITY)
// private Long id;

// @Column(name = "indicator_id", nullable = false)
// private Long indicatorId;

// @Column(name = "ticker_id", nullable = false)
// private Long tickerId;

// @Column(name = "company_id", nullable = false)
// private Long companyId;

// @Column(name = "name", nullable = false)
// private String name;

// @Column(name = "description")
// private String description;

// @Column(name = "value")
// private Double value;

// @Column(name = "type_indicator")
// private String typeIndicator;

// @Column(name = "type")
// private String type;

// @Column(name = "ticker")
// private String ticker;

// @Column(name = "key")
// private String key;

// @Column(name = "year")
// private Integer year;

// @Column(name = "`order`")
// private String order; // Pode ser mapeado como BigDecimal ou Integer

// @Column(name = "is_active")
// private Boolean isActive;

// @Column(name = "created_at")
// private LocalDateTime createdAt;

// @Column(name = "updated_at")
// private LocalDateTime updatedAt;

// @Column(name = "deleted_at")
// private LocalDateTime deletedAt;

// public Long getId() {
// return id;
// }

// public void setId(Long id) {
// this.id = id;
// }

// public Long getIndicatorId() {
// return indicatorId;
// }

// public void setIndicatorId(Long indicatorId) {
// this.indicatorId = indicatorId;
// }

// public Long getTickerId() {
// return tickerId;
// }

// public void setTickerId(Long tickerId) {
// this.tickerId = tickerId;
// }

// public Long getCompanyId() {
// return companyId;
// }

// public void setCompanyId(Long companyId) {
// this.companyId = companyId;
// }

// public String getName() {
// return name;
// }

// public void setName(String name) {
// this.name = name;
// }

// public String getDescription() {
// return description;
// }

// public void setDescription(String description) {
// this.description = description;
// }

// public Double getValue() {
// return value;
// }

// public void setValue(Double value) {
// this.value = value;
// }

// public String getTypeIndicator() {
// return typeIndicator;
// }

// public void setTypeIndicator(String typeIndicator) {
// this.typeIndicator = typeIndicator;
// }

// public String getType() {
// return type;
// }

// public void setType(String type) {
// this.type = type;
// }

// public String getTicker() {
// return ticker;
// }

// public void setTicker(String ticker) {
// this.ticker = ticker;
// }

// public String getKey() {
// return key;
// }

// public void setKey(String key) {
// this.key = key;
// }

// public Integer getYear() {
// return year;
// }

// public void setYear(Integer year) {
// this.year = year;
// }

// public String getOrder() {
// return order;
// }

// public void setOrder(String order) {
// this.order = order;
// }

// public Boolean getIsActive() {
// return isActive;
// }

// public void setIsActive(Boolean isActive) {
// this.isActive = isActive;
// }

// public LocalDateTime getCreatedAt() {
// return createdAt;
// }

// public void setCreatedAt(LocalDateTime createdAt) {
// this.createdAt = createdAt;
// }

// public LocalDateTime getUpdatedAt() {
// return updatedAt;
// }

// public void setUpdatedAt(LocalDateTime updatedAt) {
// this.updatedAt = updatedAt;
// }

// public LocalDateTime getDeletedAt() {
// return deletedAt;
// }

// public void setDeletedAt(LocalDateTime deletedAt) {
// this.deletedAt = deletedAt;
// }
// }
